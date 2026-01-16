const express = require('express')
const router = express.Router();

const Book = require('../models/Book.js')
const mongoose = require('mongoose')

router.get('/',async(req,res)=>{
    try{
        const book = await Book.find({bookId : req.bookId});
        res.json({message : 'Successfully fetched',data : book})
    }catch(err){
        res.status(500).json(err);
    }    
    
})

router.get('/:id',async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id);
        if(!book){
            res.status(404).json({message:'book not found'})
        }
        res.json({message:'Successfully Fetched',OneBook : book})
    }catch(err){
        res.json({err});
    }
})
 
router.post('/register',async(req,res)=>{
    try{
        console.log(`Body : ${req.body}`)
        const {name,qty,authorName,isbn} = req.body;
        const existing = await Book.findOne({isbn})
        if (existing){
            return res.status(400).json({message:'book exists'})
        }
        const book = await Book.create({
            name ,
            qty ,
            authorName ,
            isbn 
        })
        res.status(201).json({message:'successfully book registerd'})

    }catch(err){
        console.error('register error :',err);
        res.status(500).json({err})
    }
})

module.exports = router;