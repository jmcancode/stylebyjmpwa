const express = require("express");
const router = express.Router();
const uploadMulter = require("../../middleware/upload");

const {
  createJournals,
  getAllJournals,
} = require("../../controllers/journalControllers");

router.post("/", createJournals);

router.get("/", getAllJournals);

module.exports = router;
