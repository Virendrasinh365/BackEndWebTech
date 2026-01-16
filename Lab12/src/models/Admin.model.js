const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    name : String,
    email : {
        type:String,
        required : true,
        unique : true
    },
    password : String,
    phone : Number
},{timestamps : true})
module.exports = mongoose.model('Admin',adminSchema);