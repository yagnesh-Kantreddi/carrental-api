
const kycModel = require('../models/kyc.model');

exports.getFile =async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
    }
};

exports.uploadFile =async (body) => {
    console.log("********body*******",body)
    try {
        kycModel.create(obj,(err,data)=>{

        })
    } catch (error) {
       
    } 
};

exports.deleteFile = async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
};