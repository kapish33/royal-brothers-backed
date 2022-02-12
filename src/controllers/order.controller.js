const express = require("express");
const Orders = require("../models/Orders.modal.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const order = await Orders.create(req.body);
    res.status(201).send(order);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const orders = await Orders.find();
    res.status(200).send(orders);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
/*
{
    key: { type: String, required: true },
    value: { type: String, required: true, unique: true },
  }
*/
// update if key exists
router.patch("/:key", async (req, res) => {
  try {
    //   find key
    const order = await Orders.findOne({ key: req.params.key });
    if (order) {
      const order = await Orders.findOneAndUpdate(
        { key: req.params.key },
        req.body,
        { new: true }
      );
      res.status(200).send(order);
    }
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});
// delete as per key

module.exports = router;
