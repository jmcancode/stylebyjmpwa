const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  cb(null, true);
};

let upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const {
  createJournals,
  getAllJournals,
} = require("../../controllers/journalControllers");

router.post("/", upload.single("image"), createJournals);

router.get("/", getAllJournals);

module.exports = router;
