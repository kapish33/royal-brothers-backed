const { Schema, model } = require("mongoose");

const orders = new Schema(
  {
    key: { type: String, required: true, unique: true },
    value: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("orders", orders);
