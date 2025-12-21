const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'openstreetmap',
  httpAdapter: 'https',
  formatter: null,
  userAgent: 'BookMyStay_Init_Script'
};
const geocoder = NodeGeocoder(options);

const MONGO_URL = "mongodb://127.0.0.1:27017/BookMyStay";

// Default Location: New Delhi (Connaught Place)
const DEFAULT_COORDS = [77.2090, 28.6139]; 

main()
  .then(() => {
    console.log("Connected to DB");
    return initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    console.log("Old data cleared.");
    
    let updatedData = [];
    console.log("Fetching coordinates... (Please wait ~30 seconds)");

    for (let obj of initData.data) {
      await sleep(1000); // 1-second delay to be polite to the API

      let geometry;

      try {
        let response = await geocoder.geocode(obj.location);

        if (response.length > 0) {
          // Success: Use the real location found
          geometry = { 
            type: 'Point', 
            coordinates: [response[0].longitude, response[0].latitude] 
          };
        } else {
          // No result found: Use Default (Delhi)
          console.log(`Location not found for ${obj.location}, using Delhi.`);
          geometry = { type: 'Point', coordinates: DEFAULT_COORDS };
        }
        
      } catch (e) {
        // API Error: Use Default (Delhi)
        console.log(`Error geocoding ${obj.location}, using Delhi fallback.`);
        geometry = { type: 'Point', coordinates: DEFAULT_COORDS };
      }

      // Add the geometry to the object
      let newObj = {
        ...obj,
        owner: "693ff47d9670c1177f420ffb", 
        geometry: geometry 
      };

      updatedData.push(newObj);
      console.log(`Processed: ${obj.location}`); 
    }

    await Listing.insertMany(updatedData);
    console.log("Data initialized successfully!");
    mongoose.connection.close(); 
    
  } catch (err) {
      console.log("Error in initDB:", err);
  }
};