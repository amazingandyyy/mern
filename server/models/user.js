const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

// Define the model
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
})

userSchema.pre('save', function(next){
    // get access to user model, then we can use user.email, user.password
    const user = this;

    bcrypt.genSalt(10, function(err, salt){
        if (err) { return next(err) }

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) { return next(err); }

            user.password = hash;
            next()
        })
    })
})

userSchema.statics.comparedPassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, good){
        if (err ) { return cb(err)};
        cb(null, good);
    })
}

// Create the model class
const ModelClass = mongoose.model('User', userSchema);

// Export the model
module.exports = ModelClass;