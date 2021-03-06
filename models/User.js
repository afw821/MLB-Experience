
const bcrypt = require('bcryptjs');
SALT_WORK_FACTOR = 10;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema ({
   username: {
       type: String,
       required: true,
       index: {unique: true}
   },
   password: {
       type: String,
       required: true
   }
  
});

// //BCRYPT JS to encrypt users password on the database
UserSchema.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            console.log(user.password);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {


    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        return cb(null, isMatch);
    });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
