if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ================= CORE IMPORTS =================
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require('connect-mongo').default || require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// ================= LOCAL IMPORTS =================
const User = require("./models/user.js");
const Listing = require("./models/listing.js");
const ExpressError = require("./utils/ExpressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// ================= CONFIG =================
const dbUrl = process.env.ATLASDB_URL;
const secret = process.env.SECRET;
const PORT = 8080;

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ================= DATABASE CONNECTION (Node v22 Fix) =================
async function main() {
  await mongoose.connect(dbUrl, {
    // Force the driver to stop checking SSL certificates
    tls: true,
    tlsInsecure: true, 
  });
}

main()
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => {
    console.log("❌ Connection Failed");
    console.log(err);
  });

// ================= SESSION STORE (Modern Syntax) =================
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: secret,
  },
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.log("SESSION STORE ERROR:", err);
});

const sessionOptions = {
  store,
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
};

// ================= MIDDLEWARE CHAIN =================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use(session(sessionOptions));
app.use(flash());

// ================= PASSPORT CONFIG =================
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ================= GLOBAL VARIABLES =================
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// ================= ROUTES & API =================

// Helper to prevent Regex attacks
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// Search API
app.get("/api/listings/search", async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || typeof q !== 'string' || !q.trim()) return res.json([]);

    const safeQuery = escapeRegex(q);
    const regex = new RegExp(`^${safeQuery}`, "i");

    const listings = await Listing.find({
      $or: [{ title: regex }, { location: regex }, { country: regex }],
    });

    res.json(listings);
  } catch (err) {
    console.log("Search Error:", err);
    res.status(500).json([]);
  }
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// ================= ERROR HANDLING =================
app.all(/(.*)/, (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

// ================= SERVER START =================
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});