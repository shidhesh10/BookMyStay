const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:String,
    image: {
        default: "https://cdn.corenexis.com/view/7327512168",
        type: String,
        set: (v) => v === ""? "https://cdn.corenexis.com/view/7327512168": v,
    },
    prince: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;