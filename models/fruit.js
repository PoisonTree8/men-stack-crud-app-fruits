// models/fruit.js
module.exports = Fruit;
const mongoose = require("mongoose");
const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: Boolean,
});
const Fruit = mongoose.model("Fruit", fruitSchema); 