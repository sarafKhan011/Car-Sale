const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    subject: String,
    description: String,
    email: String,
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
