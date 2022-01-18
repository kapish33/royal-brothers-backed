const { Schema, model } = require("mongoose");

const bikeSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("bikes", bikeSchema);
