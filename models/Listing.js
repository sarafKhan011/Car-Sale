const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
  {
    make: String,
    model: String,
    year: Number,
    price: Number,
    category:String,
    cylinder: Number,
    door:Number,
    condition:String,
    fuelType: String,
    transmission: String,
    listingDescription: String,
    listingTitle:String,
    offerType:String,
    originalPrice:String,
    sellingPrice:String,
    tagline:String,
    features: Object,
    images: [String],
    email: String,
    ownerEmail: String,
    driveType: String, 
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", ListingSchema);
