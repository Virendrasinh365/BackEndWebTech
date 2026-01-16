const mongoose = require('mongoose');
const express = require('express')

const bookSchema = mongoose.Schema({
    name : String,
    qty : Number,
    authorName : String,
    isbn :  Number
},{timestamps : true})

 module.exports = mongoose.model('Book',bookSchema)
