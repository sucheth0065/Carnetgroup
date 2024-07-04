const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/user.model.js");
const UserForm = require("./models/userForm.js");
const bcrypt = require("bcrypt");
const cors = require("cors");
dotenv.config();

const url =
  "mongodb+srv://belidesujithkumar:sujith24@cluster0.11v88sx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
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
  try {
    let userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
      mobilenumber: mobile,
    });
    console.log(userDoc);
    res.status(200).json(userDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/userform", async (req, res) => {
  const {
    name,
    email,
    phone,
    roomType,
    stylePreference,
    budget,
    additionalComments,
  } = req.body;
  try {
    let inputDoc = await UserForm.create({
      name,
      email,
      phone,
      roomType,
      stylePreference,
      budget,
      additionalComments,
    });
    console.log(inputDoc);
    res.status(200).json(inputDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
