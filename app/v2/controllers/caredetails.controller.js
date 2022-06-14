
const carModel = require('../models/cardetails.model');

exports.getCars =async (req, res) => {
    try {
        carModel.find({},(err,data)=>{
            console.log(err,data)
        })
    } catch (error) {
        res.send("not found");
    }
};

exports.getCarById =async (req, res) => {
    try {
        carModel.findOne({carId:id},(err,data)=>{
            console.log(err,data)
        })
    } catch (error) {
        res.send("not found");
    }
};

exports.addDetails =async (body) => {
    console.log("********body*******",body)
    try {
        kycModel.create(obj,(err,data)=>{

        })
    } catch (error) {
       
    } 
};

exports.updateDetails =async (body) => {
    console.log("********body*******",body)
    try {
        kycModel.update(obj,(err,data)=>{

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