const carController = require("../controllers/caredetails.controller");
var express = require('express');

const router = express.Router();

router.route('/').get(carController.getCars);
router.route('/:id').get(carController.getCarById);


router.route('/')
    .delete(carController.removeDetails);

router.route('/')
    .post(carController.addDetails);
router.route('/')
    .put(carController.updateDetails);
module.exports = router;
