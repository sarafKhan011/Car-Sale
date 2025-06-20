const Listing = require("../models/Listing");

// Create a new listing
exports.createListing = async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    const savedListing = await newListing.save();
    res.status(201).json({ message: "Listing saved", data: savedListing });
  } catch (error) {
    console.error(" Error saving listing:", error);
    res.status(500).json({ error: "Failed to save listing" });
  }
};

// Get all listings
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.status(200).json(listings);
  } catch (error) {
    console.error(" Error fetching listings:", error);
    res.status(500).json({ error: "Failed to fetch listings" });
  }
};

// controllers/listingController.js
export const createListing = async (req, res) => {
  try {
    const parsedData = JSON.parse(req.body.data); // extract and parse the JSON formData
    const imagePaths = req.files.map(file => file.path); // get uploaded image paths

    const listing = new Listing({
      ...parsedData,
      images: imagePaths,
    });

    const saved = await listing.save();
    console.log("Listing created:", saved); // ✅ see actual data
    res.status(201).json({ message: 'Listing created successfully', listing: saved });
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ error: 'Failed to create listing' });
  }
};



// Get listings for a specific user by email
exports.getUserListings = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const listings = await Listing.find({ ownerEmail: email });
    res.status(200).json(listings);
  } catch (error) {
    console.error("Error fetching user listings:", error);
    res.status(500).json({ error: "Failed to fetch user listings" });
  }
};

// Get listings by type
exports.getListingsByType = async (req, res) => {
  const { type } = req.params;

  try {
    const listings = await Listing.find({ type });
    res.status(200).json(listings);
  } catch (error) {
    console.error("Error fetching listings by type:", error);
    res.status(500).json({ error: "Failed to fetch listings by type" });
  }
};

// Update a listing by ID
exports.updateListing = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ error: "Listing not found" });
    }

    res.status(200).json({ message: "Listing updated", data: updated });
  } catch (error) {
    console.error("Error updating listing:", error);
    res.status(500).json({ error: "Failed to update listing" });
  }
};

// Delete a listing by ID
exports.deleteListing = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Listing.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Listing not found" });
    }

    res.status(200).json({ message: "Listing deleted" });
  } catch (error) {
    console.error("Error deleting listing:", error);
    res.status(500).json({ error: "Failed to delete listing" });
  }
};
