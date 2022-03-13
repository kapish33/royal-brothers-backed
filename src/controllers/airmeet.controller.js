const express = require("express");
const Airmeet = require("../models/airmeet.modal");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    // pagination logic
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const airmeets = await Airmeet.find()
      .skip(skip)
      .limit(limit)
      .sort({ Description: 1 });
    const size = await Airmeet.countDocuments();
    res.json({ airmeets, size });
  } catch (err) {
    res.json({ message: err });
  }
});
// make toggle highlight as per id
router.patch("/:id", async (req, res) => {
  try {
    const airmeet = await Airmeet.findById(req.params.id);
    airmeet.Highlight = !airmeet.Highlight;
    await airmeet.save();
    res.json({ airmeet });
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
