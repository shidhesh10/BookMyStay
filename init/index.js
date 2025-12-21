const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// 1. Setup Geocoder (Copying logic from your main app)
const NodeGeocoder = require('node-geocoder');
const options = {
  provider: 'openstreetmap'
};
const geocoder = NodeGeocoder(options);

const MONGO_URL = "mongodb://127.0.0.1:27017/BookMyStay";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // Clear old data
  await Listing.deleteMany({});
  
  // Create an empty array to store the updated listings
  let updatedData = [];

  console.log("Fetching coordinates... this might take a moment.");

  // Loop through every listing
  for (let obj of initData.data) {
    try {
      // 2. Fetch Coordinates for THIS listing's location
      let response = await geocoder.geocode(obj.location);

      // Default fallback if geocoding fails for a weird location name
      let geometry = { type: 'Point', coordinates: [77.209, 28.613] }; 

      if (response.length > 0) {
        geometry = { 
          type: 'Point', 
          coordinates: [response[0].longitude, response[0].latitude] 
        };
      }

      // 3. Create the updated object
      let newObj = {
        ...obj,
        owner: "693ff47d9670c1177f420ffb", // Your User ID
        geometry: geometry
      };

      updatedData.push(newObj);
      console.log(`Geocoded: ${obj.location}`); // Log progress so you know it's working
      
    } catch (e) {
      console.log(`Error geocoding ${obj.location}:`, e);
      // Even if it fails, push the object with default coords so the loop doesn't crash
      updatedData.push({ ...obj, owner: "693ff47d9670c1177f420ffb", geometry: { type: 'Point', coordinates: [0, 0] } });
    }
  }

  // 4. Save everything
  await Listing.insertMany(updatedData);
  console.log("Data initialized with REAL coordinates!");
};

initDB();