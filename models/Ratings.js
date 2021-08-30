const mongoose = require("mongoose");

const RatingsSchema = new mongoose.Schema({
  text: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
});
