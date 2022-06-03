//Requiring Mongoose
const mongoose = require("mongoose");

var kycSchema = mongoose.Schema({
  userId: {
    type: String
  },
  aadhar: {
    url: {
      type: String
    },
    verified: {
      type: Boolean,
      default: false
    }
  },
  licence: {
    url: {
      type: String
    },
    verified: {
      type: Boolean,
      default: false
    }
  },
  profile: {
    url: {
      type: String
    },
    verified: {
      type: Boolean,
      default: false
    }
  }

});

//Exporting the file
module.exports = mongoose.model("kyc", kycSchema);