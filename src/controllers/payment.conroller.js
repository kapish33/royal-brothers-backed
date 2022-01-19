const express = require("express");
const authenticater = require("../middlewares/authenticate");
const Payment = require("../models/payment.modal");
const router = express.Router();

router.post("/", authenticater, async (req, res) => {
  try {
    const user = req.user;

    const payment = await Payment.create({
      user: user.user._id,
      bike: req.body.bike,
      total: req.body.total,
      status: req.body.status,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
    });

    return res.status(201).json({ payment });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.get("/", async (req, res) => {
  const payments = await Payment.find().lean().exec();
  return res.send(payments);
});
router.get("/:id", async (req, res) => {
  const payment = await Payment.findById(req.params.id).lean().exec();
  return res.send(payment);
});

module.exports = router;
