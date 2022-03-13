const { Schema, model } = require("mongoose");
const airmeetSchema = new Schema(
  {
    Image: { type: String, required: true },
    Description: { type: String, required: true },
    Highlight: { type: Boolean, required: true },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);
module.exports = model("airmeet", airmeetSchema);
