const { Schema, model } = require("mongoose");

const locationSchema = new Schema({
  location: { type: String, required: true, unique: true },
  image: { type: String, required: true, unique: true },
});

module.exports = model("location", locationSchema);
