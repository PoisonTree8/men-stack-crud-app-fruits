
// Here is where we import modules
// We begin by loading Express
const dotenv = require("dotenv"); // require package
dotenv.config(); // Loads the environment variables from .env file
const express = require('express');
const mongoose = require("mongoose");
const Fruit = require("./models/fruit.js");

const app = express();
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});


app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/fruits/new", (req, res) => {
  res.send("This route sends the user a form page!");
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});


