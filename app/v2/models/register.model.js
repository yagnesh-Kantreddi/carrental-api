//Requiring Mongoose
var mongoose = require('mongoose');

//Defining Schema
var userSchema = mongoose.Schema({

    _id: {
        type: String,
        required: true
    },

    Name: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    role:{
        type:String,
        required:true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

//Inserting user Details
module.exports.addUser = function(user, callback) {
    User.create(user, callback);
}