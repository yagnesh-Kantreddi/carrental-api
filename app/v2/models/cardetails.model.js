//Requiring Mongoose
const mongoose = require("mongoose");

var carSchema = mongoose.Schema({
    userId: {
        type: String
    },
    carId: {
        type: String
    },
    model: {
        type: String
    },
    kilometers: {
        type: Number
    },
    mileage: {
        type: Number
    },
    fueltype: {
        type: String
    },
    seater:{
        type:Number
    },
    garetype:{
        type:String
    },
    price:{
        type:Number
    },
    available: {
        type: Boolean
    },
    image:{
        type:String
    }

});

//Exporting the file
module.exports = mongoose.model("car", carSchema);