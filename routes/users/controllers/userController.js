const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    signup: function (params) {
        return new Promise ((resolve, reject) => {
            User.findOne({ email: params.email }) 
                .then( user => {
                    if (user) {
                        let errors = {};
                        errors.message = 'Email already exists';
                        errors.status = 400;
                        reject(errors);
                    }
                    else {
                        const newUser = new User();

                        newUser.profile.name = params.name;
                        newUser.password = params.password;
                        newUser.email = params.email;

                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) {
                                    reject(err)
                                }
                                else {
                                    newUser.password = hash;

                                    newUser.save()
                                            .then( user => {
                                                resolve(user);
                                            })
                                            .catch(err => 
                                                reject(err)
                                            );
                                }
                            })
                        })
                    }
                })
                .catch(error => {
                    let errors = {};
                    errors.message = error;
                    errors.status = 400;
                    reject(errors);
                })
        })
    }
}