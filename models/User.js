const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["user", "admin", "super"],
    default: "user",
  },
  billingAddress: {
    type: String,
  },
  shippingAddress: {
    type: String,
  },
  newsletter: {
    type: Boolean,
  },
  favs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "favs",
  },
  accessToken: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
