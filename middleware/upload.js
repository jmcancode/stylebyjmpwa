const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  dest: function (req, file, cb) {
    cb(null, "/uploads/");
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
