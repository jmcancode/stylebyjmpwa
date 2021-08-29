const express = require("express");
const router = express.Router();
// upload middleware here...

const {
  createJournals,
  getAllJournals,
} = require("../../controllers/journalControllers");

router.post("/", createJournals);

router.get("/", getAllJournals);

module.exports = router;
