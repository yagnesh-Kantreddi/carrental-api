const mongoose = require('mongoose');
var otpSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    isExpired:{
        type: Boolean,
        required: true,
        default:false
    }
},

    {
        timestamps: true
    }
)

module.exports = mongoose.model('otp',otpSchema);