const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

mongoose.connect(process.env)

const UserSchema =  new mongoose.Schema({
   username:String,
    password:String,
    firstName:String,
    lastName:String
});


const User= mongoose.model('User',UserSchema);

module.exports = {
    User
}