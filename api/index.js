const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user.model.js");
const bcrypt = require("bcrypt");
const cors = require("cors");
dotenv.config();

const url =
  "mongodb+srv://Sucheth:sucheth6500@cluster0.mebxuu9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

const bcryptSalt = bcrypt.genSaltSync(10);

app.get("/test", (req, res) => {
  res.json("Test ok!");
});

app.post("/signup", async (req, res) => {
  const { username, email, password, mobile } = req.body;

  let userDoc = await User.create({
    username,
    email,
    password: bcrypt.hashSync(password, bcryptSalt),
    mobilenumber: mobile,
  });

  res.json(userDoc);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
