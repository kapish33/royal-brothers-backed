const express = require("express");
const authenticater = require("../middlewares/authenticate");
const Location = require("../models/location.modal");
const router = express.Router();

router.post("/", authenticater, async (req, res) => {
  try {
    const newLocation = await Location.create({
      location: req.body.name,
      image: req.body.image,
    });
    return res.status(201).json({ location: newLocation });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  const locations = await Location.find().lean().exec();
  return res.send(locations);
});

module.exports = router;
