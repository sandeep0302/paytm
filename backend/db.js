const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://sandeepgsgggg:sandeep123@cluster0.flofr.mongodb.net/')

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