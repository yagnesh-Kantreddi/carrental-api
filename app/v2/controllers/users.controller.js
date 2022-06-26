const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var crypto = require('crypto');
const User = require('../models/session.model');

//get the user details - by ID (Login user)
exports.login = function (req, res, next) {
    User.getUserByField({
        _id: req.body.email,
    }, function (err, user) {
        console.log("inside", req.body, user)
        var newUser = new User();
        if (user) {
            console.log(req.body.password, user.password)
            if (newUser.validPassword(req.body.password, user.password) == false) {
                response = {
                    message: 'UserID or Password does not match',
                };
                res.status(401).send(response);
            } else {
                res.status(200).send(newUser.buildUserPayload(user));
            }
        } else {
            response = {
                message: 'UserID or Password does not match',
            };
            res.status(404).send(response);
        }
    });
};

//register the user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
exports.register = function (req, res) {
    User.getUserByField({
        _id: req.body._id,
    }, function (err, user) {
        console.log(user)
        if (user) {
            response = {
                message: 'User with that userid already exists',
            };
            // logger.error('User already registered with this Id : ' + req.body.userid);
            res.status(409).send(response);
        } else {
            genPassword = req.body.password//crypto.randomBytes(Math.ceil(5)).toString('hex').slice(0, 10);
            var newUser = new User(req.body);
            console.log(newUser)
            newUser.password = newUser.generateHash(genPassword);
            User.addUser(newUser, function (err, user) {
                if (!err && user) {                    
                    res.status(200).send(newUser.buildUserPayload(user, genPassword));
                } else {
                    console.log(err);
                    response = {
                        message: 'Sorry insertion failed',
                    };
                    // logger.error('User registration failed for id ' + req.body.userid);
                    res.status(500).send(response);
                }

            });
        }

    });
};

// Generaring random passowrd
exports.generatePassword = (req, res) => {
    console.log("generaing password")
    var genPassword = crypto.randomBytes(Math.ceil(5)).toString('hex').slice(0, 10);
    res.status(200).send({ generatePassword: genPassword })
}

//get all users list
exports.listUsers = function (req, res) {
    User.getAllUsers({}, {
        // password: 0,
    }, function (err, users) {
        if (err) {
            // logger.error(err);
            res.status(500).send(err);
        } else {
            if (users.length > 0) {
                // logger.info('All users found successfully');
                res.status(200).send(users);
            }
        }
    });
};


//delete user by Id
exports.removeUser = function (req, res) {
    User.deleteUserById({
        _id: req.params.email,
    }, function (err, user) {
        console.log(err, user)

        if (err) {
            // logger.error(err);
            res.status(500).send(err);
        } else {

            if (user.n) {
                response = {
                    message: 'User deleted successfully.',
                };
                // logger.info('user deleted at id ' + req.params.uid);
                res.status(200).send(response);
            } else {
                // logger.error('User not found with Id ' + req.params.uid);
                res.status(404).send('User not found');
            }
        }
    });
};

// Reset password
exports.resetPassword = function (req, res) {
    console.log("22222", req.body.resetPassword)
    rawPassword = req.body.resetPassword
    console.log(rawPassword);
    var newUser = User();
    pwHash = newUser.generateHash(rawPassword);
    console.log("mykey", pwHash)
    query = {
        $set: {
            password: pwHash
        }
    }
    User.findOneAndUpdate({
        "userid": req.body.userid
    }, query, {
        "new": true
    })
        .then((userDoc) => {
            console.log(userDoc);
            res.status(200).send(userDoc);
        }, (err) => {
            console.log("err", err);
        })
};

//
exports.changePassword = function (req, res) {
    console.log("change password", req.body)
    User.getUserByField({
        userid: req.body.userid,
    }, function (err, user) {
        if (user) {
            var newUser = User();
            if (newUser.validPassword(req.body.password, user.password) == false) {
                response = {
                    message: 'sorry wrong password',
                };
                // logger.error('Password reset attempt with wrong password by: ' + user.userid);
                res.status(401).send(response);
            } else {
                newPassword = newUser.generateHash(req.body.newPassword);
                User.updateUser({
                    userid: req.body.userid
                }, {
                    password: newPassword
                }, function (err, user) {
                    if (!err) {
                        res.status(200).send(user.updatedAt);
                    } else {
                        console.log(err);
                        res.status(500)
                    }
                })
            }
        } else {
            response = {
                message: 'User with that ID not found.',
            };
            res.status(404).send(response);
        }
    });
}


exports.secretKey = async (req, res) => {
    res.send({ key: "secret_profile_key" })
}