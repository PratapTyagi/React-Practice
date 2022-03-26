const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("./multerConfig/multerUpload");

app.use(cors());
app.use(express.json());

app.post("/form", upload.single("fileData"), async (req, res) => {
  try {
    console.log(req.file);
    const file = req.file.filename;
    const { name } = req.body;
    // Can store in database accordingly
    return res.json({ status: 200, file: req.file, name });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
