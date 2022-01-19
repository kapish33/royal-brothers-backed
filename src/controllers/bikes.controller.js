const express = require("express");
const authenticater = require("../middlewares/authenticate");
const Bikes = require("../models/bikes.modal");

const router = express.Router();

router.post("/", authenticater, async (req, res) => {
  try {
    const bike = await Bikes.create({
      name: req.body.name,
      image: req.body.image,
      hourPrice: req.body.hourPrice,
    });
    return res.status(201).json({ Bikes: bike });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  const locations = await Bikes.find().lean().exec();
  return res.send(locations);
});

module.exports = router;
