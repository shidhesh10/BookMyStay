const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./models/listing.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/BookMyStay";

main().then(() => {
  console.log("Coonected to DB");
}).catch((err) => {
  console.log(err);
});
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("✅ Express is working perfectly!");
});

app.get("/testlisting", async (req, res) => {
  let sampleListing = new Listing({
    title: "Bali Trip",
    description: "Sitting by the beach",
    price: 1200,
    location:"Bali",
    country: "Unknown",

  });

  await sampleListing.save();
  console.log("Sample was saved");
  res.send("Successful");
})

app.listen(8080, () => {
  console.log("Server started: http://localhost:8080");
});
