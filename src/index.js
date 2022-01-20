const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");
const locationController = require("./controllers/location.controller");
const bikeController = require("./controllers/bikes.controller");
const paymentController = require("./controllers/payment.conroller");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/users", userController) // /register /login
app.post("/register", register);
app.post("/login", login);

app.use("/products", productController);
app.use("/locations", locationController);
app.use("/bikes", bikeController);
app.use("/payments", paymentController);

module.exports = app;
