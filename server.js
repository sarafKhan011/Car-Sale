// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const Listing = require("./models/Listing");
// const Contact = require("./models/Contact");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Root route
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// // ✅ Add listing
// app.post("/api/listing", async (req, res) => {
//   try {
//     const newListing = new Listing(req.body);
//     await newListing.save();
//     console.log("Incoming data:", req.body);
//     res.status(200).json({ message: "Listing saved", data: newListing });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to save listing" });
//   }
// });

// // ✅ Get listings by user email
// app.get("/api/listin", async (req, res) => {
//   const { email } = req.query;

//   if (!email) {
//     return res.status(400).json({ error: "Missing email in query" });
//   }

//   try {
//     const listings = await Listing.find({ ownerEmail: email });
//     res.status(200).json(listings);
//   } catch (err) {
//     console.error("Failed to fetch user listings:", err);
//     res.status(500).json({ error: "Error fetching user listings" });
//   }
// });

// // ✅ Get all listings (for homepage or general use)
// app.get("/api/listing", async (req, res) => {
//   try {
//     const listings = await Listing.find().sort({ createdAt: -1 });
//     res.status(200).json(listings);
//   } catch (error) {
//     console.error("Error fetching listings:", error);
//     res.status(500).json({ error: "Failed to fetch listings" });
//   }
// });

// // ✅ Get listings by type (FilteredListings.jsx uses this)
// app.get("/api/listing/type/:type", async (req, res) => {
//   const { type } = req.params;

//   try {
//     const listings = await Listing.find({ type: type });
//     res.status(200).json(listings);
//   } catch (err) {
//     console.error("Failed to fetch listings by type:", err);
//     res.status(500).json({ error: "Error fetching listings by type" });
//   }
// });

// // ✅ Contact API
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, subject, message } = req.body;

//     const contact = new Contact({ name, email, subject, message });
//     await contact.save();

//     console.log("📩 Contact saved:", contact);
//     res.status(200).json({ message: "Contact message saved" });
//   } catch (error) {
//     console.error("❌ Error saving contact:", error);
//     res.status(500).json({ error: "Failed to save contact message" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Listing = require("./models/Listing");
const Contact = require("./models/Contact");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🚀 API is running");
});

// ✅ Create new listing
app.post("/api/listing", async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    console.log("📥 Listing created:", req.body);
    res.status(201).json({ message: "Listing saved", data: newListing });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save listing" });
  }
});

// ✅ Get all listings
app.get("/api/listing", async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 });
    res.status(200).json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

// ✅ Get listings by owner email
app.get("/api/listing/user", async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: "Missing email in query" });
  }

  try {
    const listings = await Listing.find({ ownerEmail: email });
    res.status(200).json(listings);
  } catch (err) {
    console.error("Failed to fetch user listings:", err);
    res.status(500).json({ error: "Error fetching user listings" });
  }
});

// ✅ Get listings by type
app.get("/api/listing/type/:type", async (req, res) => {
  const { type } = req.params;

  try {
    const listings = await Listing.find({ type });
    res.status(200).json(listings);
  } catch (err) {
    console.error("Failed to fetch listings by type:", err);
    res.status(500).json({ error: "Error fetching listings by type" });
  }
});

// ✅ View a single listing by ID
app.get("/api/listing/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.status(200).json(listing);
  } catch (error) {
    console.error("Error fetching listing:", error);
    res.status(500).json({ error: "Failed to fetch listing" });
  }
});

// ✅ Update a listing by ID
app.put("/api/listing/:id", async (req, res) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedListing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.status(200).json({ message: "Listing updated", data: updatedListing });
  } catch (error) {
    console.error("Error updating listing:", error);
    res.status(500).json({ error: "Failed to update listing" });
  }
});

// ✅ Delete a listing by ID
app.delete("/api/listing/:id", async (req, res) => {
  try {
    const deletedListing = await Listing.findByIdAndDelete(req.params.id);
    if (!deletedListing) {
      return res.status(404).json({ error: "Listing not found" });
    }
    res.status(200).json({ message: "Listing deleted", data: deletedListing });
  } catch (error) {
    console.error("Error deleting listing:", error);
    res.status(500).json({ error: "Failed to delete listing" });
  }
});

// ✅ Contact message endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    console.log("📩 Contact saved:", contact);
    res.status(201).json({ message: "Contact message saved" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ error: "Failed to save contact message" });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});