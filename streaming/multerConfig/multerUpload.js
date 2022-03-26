const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const fileNameInPC = file.originalname.split(".");
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      fileNameInPC[0] + "-" + uniqueName + "." + path.extname(file.originalname)
    );
  },
});

module.exports = multer({ storage });
