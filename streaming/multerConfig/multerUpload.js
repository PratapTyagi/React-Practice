const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const fileNameInPC = file.originalname.split(".");
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extensionArray = file.mimetype.split("/");
    cb(
      null,
      fileNameInPC[0] +
        "-" +
        uniqueName +
        "." +
        extensionArray[extensionArray.length - 1]
    );
  },
});

module.exports = multer({ storage });
