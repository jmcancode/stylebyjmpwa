const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    active: {
      type: Boolean,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
    products: [
      {
        productId: { type: Number },
        quantity: { type: Number },
        name: { type: String },
        price: { type: number },
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
