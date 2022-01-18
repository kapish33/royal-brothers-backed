const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");
const locationController = require("./controllers/location.controller");
const bikeController = require("./controllers/bikes.controller");

const app = express();

app.use(express.json());

// app.use("/users", userController) // /register /login
app.post("/register", register);
app.post("/login", login);

app.use("/products", productController);
app.use("/locations", locationController);
app.use("/bikes", bikeController);

module.exports = app;
