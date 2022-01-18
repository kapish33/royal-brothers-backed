const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://kapish:kapish@cluster0.ch85x.mongodb.net/royalbrothers"
  );
};
