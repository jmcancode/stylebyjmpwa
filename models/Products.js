const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
    },
    productId: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
    price: {
      type: Number,
    },
    ratings: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
