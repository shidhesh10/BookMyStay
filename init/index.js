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

const MONGO_URL = process.env.ATLASDB_URL;

// Default Location: New Delhi (Connaught Place)
const DEFAULT_COORDS = [77.2090, 28.6139]; 

main()
  .then(() => {
    console.log("Connected to Atlas DB");
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
    // 1. Clear the online database
    await Listing.deleteMany({});
    console.log("Old data cleared from Atlas.");
    
    let updatedData = [];
    console.log("Fetching coordinates... (This ensures maps work on your live site)");

    for (let obj of initData.data) {
      await sleep(1000); // Polite delay for the Geocoding API

      let geometry;

      try {
        let response = await geocoder.geocode(obj.location);

        if (response.length > 0) {
          geometry = { 
            type: 'Point', 
            coordinates: [response[0].longitude, response[0].latitude] 
          };
        } else {
          console.log(`Location not found for ${obj.location}, using Default.`);
          geometry = { type: 'Point', coordinates: DEFAULT_COORDS };
        }
        
      } catch (e) {
        console.log(`Error geocoding ${obj.location}, using Default.`);
        geometry = { type: 'Point', coordinates: DEFAULT_COORDS };
      }

      // 2. Create the new object with the CORRECT Owner ID
      let newObj = {
        ...obj,
        owner: "694fee3bbb8c44759ebb60bd", // <--- Your Live User ID
        geometry: geometry 
      };

      updatedData.push(newObj);
      console.log(`Processed: ${obj.location}`); 
    }

    // 3. Upload to Atlas
    await Listing.insertMany(updatedData);
    console.log("✅ Data successfully initialized in Atlas!");
    mongoose.connection.close(); 
    
  } catch (err) {
      console.log("Error in initDB:", err);
  }
};