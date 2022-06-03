const passwordGenerator = require('generate-otp')
const mailTo = require('./mail.controller')
const optModel = require('../models/otp.model');
const otpModel = require('../models/otp.model');

exports.generateOtp = async (req, res) => {

    let otp = passwordGenerator.generate(6);
    let email = req.body.id
    // console.log(otp, email)
    if (parseInt(otp) > 99999) {
        console.log(otp, email)

        otpModel.create({ "_id": email, otp: otp }, (err, data) => {
            console.log(err, data)
            if (data)
                // mailTo.sendemail(email, otp).then(() => {
                res.status(200).send({ "message": otp+" OTP sent successfully" })
            // }).catch((err) => {
            //     res.status(400).send({ "message": "Failed to send OTP, make request to generate new OTP" })
            // })
        })

    }
};

exports.verifyOtp = async (req, res) => {
    let otp = req.body.otp
    let email = req.body.id
    otpModel.findOne({ "_id": email, otp: otp }, (err, data) => {
        console.log(otp, email, err, data)
        if (data) {
            var datetime = data.createdAt;
            var now = new Date().getTime();
            if (datetime < now) {
                var milisec_diff = now - datetime;
            } else {
                var milisec_diff = datetime - now;
            }
            var date_diff = Math.round((milisec_diff / 1000) / 60);
            console.log(date_diff)
            if (date_diff <= 2) {
                res.status(200).send(true)
            } else {
                otpModel.deleteOne({ "_id": email, otp: otp }, (err, data) => {
                    console.log(err, data)
                    res.status(200).send(false)
                })
            }
        } else {
            otpModel.deleteOne({ "_id": email, otp: otp }, (err, data) => {
                console.log(err, data)
                res.status(200).send(false)
            })
        }
    })
};


