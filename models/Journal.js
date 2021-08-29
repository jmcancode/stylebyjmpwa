const mongoose = require("mongoose");

const JournalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    image: {
      type: Buffer,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    meta: {
      votes: Number,
      favs: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("journal", JournalSchema);
