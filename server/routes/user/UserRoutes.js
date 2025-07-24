const express = require("express");
const router = express.Router();
const userLoginController = require("../../controller/userLogin/UserLogin");

router.post("/signup", userLoginController.signup);
router.post("/login", userLoginController.login);

module.exports = router;
