const { Schema, model } = require("mongoose");
// payment schema
const paymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    bike: [
      {
        type: Schema.Types.ObjectId,
        ref: "bikes",
        required: true,
      },
    ],
    total: { type: Number, required: true },
    status: { type: String, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("payment", paymentSchema);
