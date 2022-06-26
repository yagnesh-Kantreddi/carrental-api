
const carModel = require('../models/cardetails.model');

exports.getCars = async (req, res) => {
    try {
        carModel.find({}, (err, data) => {
            console.log(err, data)
            res.status(200).send(data)
        
        })
    } catch (error) {
        res.send("not found");
    }
};

exports.getCarById = async (req, res) => {
    try {
        console.log(req.params.id)
        carModel.findOne({ carId: req.params.id }, (err, data) => {
            console.log(err, data)
            res.send(data)
        })
    } catch (error) {
        res.send("not found");
    }
};

exports.addDetails = async (req, res) => {
    console.log("********body*******", req.body)
    try {
        carModel.create(req.body, (err, data) => {
            console.log(err, data);
            res.status(200).send(data)
        })
    } catch (error) {

    }
};

exports.updateDetails = async (body) => {
    console.log("********body*******", body)
    try {
        carModel.update(obj, (err, data) => {

        })
    } catch (error) {

    }
};

exports.removeDetails = async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
};


