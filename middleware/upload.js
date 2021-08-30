const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../middlewear/upload.js");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, "circulate" + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  cb(null, true);
};

let upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload.single("image");
