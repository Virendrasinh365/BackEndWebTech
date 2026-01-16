const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const Student = require('../models/Student.js');
const mongoose = require('mongoose');

// authentication

// const generateToken = (userId)=>{
//     return jwt.sign({id:userId},process.env.secretkey,{expiresIn : '30m'})
// }
// const verifyToken = (req,res,next)=>{
//     const authHeader = req.headers.authorization;
//     if(!authHeader){
//         return res.json({message:'Token MIssing'});
//     }
//     const token = authHeader.split(' ')[1];
//     try{
//         const decoded = jwt.verify(token,process.env.secretkey);
//         req.userId = decoded.id;
//         next();
//     }catch(err){
//         console.log({message : InvaildToken});
        
//     }

// }

router.get('/',async(req,res)=>{
    try{
        const student  = await Student.find({userId : req.userId});
        res.json({message : 'successfully fetched',data : student})
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            res.status(404).json({message:'user not found'})
        }
        res.json({message:'Suuccessfuly fetched',OneUser : student})

    }
    catch(err){
        res.json({err});
    }
})

// Create 
router.post('/register',async(req,res)=>{
    try{
        console.log(`Body : ${req.body}`)
        const {stuName , stuEmail, password, phone,rollNo} = req.body;
        
        const existing =await Student.findOne({rollNo});
        if (existing){
            return res.status(400).json({message:'Student exists'})
        }
        const hashPassword = await bcrypt.hash(password,10);
        const admin = await Student.create({
            stuName,
            stuEmail,
            password : hashPassword,
            phone,
            rollNo
        })
        res.status(201).json({massage:'Successfully registered user',CreateUser : student})
    }catch(err){
         console.error('Register error:', err); 
        res.status(500).json({err})
    }
})



module.exports = router;