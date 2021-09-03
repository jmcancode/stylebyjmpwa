const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../../models/User");
const Journal = require("../../models/Journal");
const checkObjectId = require("../../middleware/checkObjectId");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const {
  createJournals,
  getAllJournals,
} = require("../../controllers/journalControllers");

router.post("/", upload.single("image"), createJournals);

router.get("/", getAllJournals);

// @desc    get by id
router.get("/:id", checkObjectId("id"), async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);

    if (!journal) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(journal);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

// @route    PUT api/journal/like/:id
// @desc     Like a post
// @access   Private
router.put("/like/:id", checkObjectId("id"), async (req, res, next) => {
  try {
    const journal = await Journal.findById(req.params.id);

    // Check if the journal has already been liked
    if (journal.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "Journal already liked" });
    }

    journal.likes.unshift({ user: req.user.id });

    await journal.save();

    return res.json(journal.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/journal/unlike/:id
// @desc     Unlike a post
// @access   Private
router.put("/unlike/:id", checkObjectId("id"), async (req, res, next) => {
  try {
    const journal = await Journal.findById(req.params.id);

    // Check if the journal has not yet been liked
    if (!journal.likes.some((like) => like.user.toString() === req.user.id)) {
      return res.status(400).json({ msg: "journal has not yet been liked" });
    }

    // remove the like
    journal.likes = journal.likes.filter(
      ({ user }) => user.toString() !== req.user.id
    );

    await journal.save();

    return res.json(journal.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
