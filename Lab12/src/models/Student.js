const mongoose = require('mongoose');
const express = require('express')

const studentSchema = mongoose.Schema({
    stuName : String,
    stuEmail : {
        type : String,
        required : true,
        unique : true
    },
    password : String,
    phone :  Number,
    rollNo :Number
},{timestamps : true})

 module.exports = mongoose.model('Student',studentSchema)
