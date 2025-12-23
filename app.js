if (process.env.NODE_ENV != "production") {
  require('dotenv').config()
}

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Listing = require("./models/listing");


const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000*60*60*24*3,
    maxAge: 1000 * 60 * 60 * 24 * 3,
    httpOnly: true
  },
};


app.engine('ejs', ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({extended: true}));
//app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/BookMyStay";

main().then(() => {
  console.log("Connected to DB");
}).catch((err) => {
  console.log(err);
});
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
})

// SEARCH SUGGESTIONS API (PRIORITY: Title > City > Country)
app.get("/api/listings/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.trim().length === 0) {
      return res.json([]);
    }

    const regex = new RegExp(`^${q}`, "i"); // starts with, case-insensitive

    // Fetch matching listings
    const listings = await Listing.find({
      $or: [
        { title: regex },
        { location: regex },
        { country: regex }
      ]
    });

    // PRIORITY SORTING
    const sorted = listings.sort((a, b) => {
      const score = (listing) => {
        if (listing.title.match(regex)) return 1;
        if (listing.location.match(regex)) return 2;
        if (listing.country.match(regex)) return 3;
        return 4;
      };
      return score(a) - score(b);
    });

    res.json(sorted);
  } catch (err) {
    console.error("Search API Error:", err);
    res.status(500).json([]);
  }
});


app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter)

app.all(/.*/,(req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
})

app.use((err, req, res, next) => {
  let {statusCode=500, message="Something went wrong"} = err;
  res.status(statusCode).render("error.ejs", {message});
  // res.status(statusCode).send(message);
})

app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});
