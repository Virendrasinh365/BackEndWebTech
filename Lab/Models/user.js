const mongoose = require('mongoose')
const express = require('express')

const userSchema = mongoose.Schema({
    name : String,
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : String,
    phone : Number

},{timestamps : true})

module.exports = mongoose.model('users',userSchema)