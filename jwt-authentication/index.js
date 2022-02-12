const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH = process.env.JWT_REFRESH;

app.use(express.json());

const requireLogin = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized access" });
  }
  const token = authorization.split(" ")[1];
  try {
    const user = await jwt.verify(token, JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ error: error.name });
    }
    console.log(error);
    res.status(500).json(error);
  }
};

app.get("/protected", requireLogin, async (req, res) => {
  res.status(200).json({ message: "Done" });
});

app.post("/refresh", async (req, res) => {
  const { token } = req.body;

  if (!token) return res.status(401).json({ message: "Unauthorized access" });

  try {
    const user = await jwt.verify(token, JWT_REFRESH);
    const authToken = await jwt.sign({ user }, JWT_SECRET, {
      expiresIn: "20s",
    });
    return res.status(200).json(authToken);
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ error: error.name });
    }
    console.log(error);
    res.status(500).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { user } = req.body;

  try {
    const authToken = await jwt.sign(user, JWT_SECRET, { expiresIn: "20s" });
    const refreshToken = await jwt.sign(user, JWT_REFRESH, { expiresIn: "1m" });

    return res.status(200).json({ authToken, refreshToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
