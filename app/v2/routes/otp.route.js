const otpController = require("../controllers/otp.controller.js");
var express = require('express');

const router = express.Router();

router.route('/generate')
    .post(otpController.generateOtp);

router.route('/verify')
    .post(otpController.verifyOtp);


module.exports = router;
