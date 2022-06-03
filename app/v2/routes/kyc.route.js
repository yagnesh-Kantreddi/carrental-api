const fileController = require("../controllers/kyc.controller.js");
var express = require('express');

const router = express.Router();

router.route('/').get(fileController.getFile);

router.route('/')
    .delete(fileController.deleteFile);

router.route('/')
    .post(fileController.uploadFile);
module.exports = router;
