const express = require("express");
const authRoute = express.Router();
const authController = require("../controller/auth.controller");

authRoute.route("/signUp").post(authController.signUp);
authRoute.route("/signIn").post(authController.signIn);

module.exports = authRoute;
