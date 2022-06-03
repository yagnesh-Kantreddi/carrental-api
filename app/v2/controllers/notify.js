var cron = require('node-cron');
const otpModel = require('../models/otp.model');


exports.otpValidator = function () {

    otpModel.find({}, (err, data) => {
        if (!err && data && data.length > 0)
            data.map(ele => {
                var datetime = ele.createdAt;
                var now = new Date().getTime();
                if (datetime < now) {
                    var milisec_diff = now - datetime;
                } else {
                    var milisec_diff = datetime - now;
                }
                var date_diff = Math.round((milisec_diff / 1000) / 60);
                
                if (date_diff >=2) {
                    otpModel.updateOne({"_id":ele._id,isExpired:true},(err,data)=>{

                    })
                }
    })

})
}
