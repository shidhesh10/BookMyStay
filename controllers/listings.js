const Listing = require("../models/listing");
const NodeGeocoder = require('node-geocoder');

// Configure OpenStreetMap Geocoder
const options = {
  provider: 'openstreetmap',
  httpAdapter: 'https',
  formatter: null,
  userAgent: 'BookMyStay_v1' // Needed to prevent blocking
};
const geocoder = NodeGeocoder(options);

module.exports.index = async (req, res) => {
    const { category } = req.query;
    let allListings;

    if (category) {
        // If user clicked a category icon, find listings matching that category
        allListings = await Listing.find({ category: category });
    } else {
        // If no category selected, show ALL listings (Default behavior)
        allListings = await Listing.find({});
    }

    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  
  res.render("listings/new.ejs")
};

module.exports.showListing = async (req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id).populate({
    path: "reviews",
    populate: {
      path: "author",
    }
  }).populate("owner");
  if(!listing) {
    req.flash("error", "Listing you requested for does not exist");
    res.redirect("/listings");
    return
  }
  res.render("listings/show.ejs", {listing})
};

module.exports.createListing = async (req, res, next) => {
    // 1. Get Coordinates from Address
    let response = await geocoder.geocode(req.body.listing.location);
    
    // 2. Handle Image info
    let url = req.file.path;
    let filename = req.file.filename;
    
    // 3. Create Listing Instance
    const newListing = new Listing(req.body.listing);
    
    // 4. Assign Owner & Image
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    // OpenStreetMap returns an array, we take the first result [0]
    newListing.geometry = {
        type: 'Point', 
        coordinates: [response[0].longitude, response[0].latitude]
    };

    // 5. Save & Redirect
    let savedListing = await newListing.save();
    console.log(savedListing); // Check your terminal to see the coordinates!
    
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  if(!listing) {
    req.flash("error", "Listing you requested for does not exist");
    res.redirect("/listings");
    return
  }
  
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_300")
  res.render("listings/edit.ejs", {listing, originalImageUrl})
};

module.exports.updateListing = async (req, res) => {
  let {id} = req.params;
  let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

  if(typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    await listing.save();
  }

  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
  
};

module.exports.search = async(req, res) => {
  console.log(req.query.q);
  let {q} = req.query;

  if(!q) {
    return redirect("/listings");
  }

  const sanitizedQuery = q.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const listings = await Listing.find({
    $or: [
      {location: {$regex: sanitizedQuery, $options: "i"}},
      {country: {$regex: sanitizedQuery, $options: "i"}}
    ]
  });

  res.render("listings/index.ejs", { allListings: listings });
}