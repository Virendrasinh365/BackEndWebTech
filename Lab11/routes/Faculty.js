const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Faculty = require('../models/Faculty.js');
const mongoose = require('mongoose')

// authentication

const generateToken = (userId)=>{
    return jwt.sign({id:userId},process.env.secretkey,{expiresIn : '30m'})
}
const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.json({message:'Token MIssing'});
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,process.env.secretkey);
        req.userId = decoded.id;
        next();
    }catch(err){
        console.log({message : InvaildToken});
        
    }

}

router.get('/faculty',verifyToken,async(req,res)=>{
    try{
        const faculty = await Faculty.find({userId : req.userId});
        res.json({message : 'successfully fetched',data : faculty})
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/faculty/:id',verifyToken,async(req,res)=>{
    try{
        const faculty = await Faculty.findById(req.params.id);
        if(!faculty){
            res.status(404).json({message:'user not found'})
        }
        res.json({message:'Suuccessfuly fetched',OneUser : faculty})

    }
    catch(err){
        res.json({err});
    }
})

// Create 
router.post('/register',async(req,res)=>{
    try{
        console.log(`Body : ${req.body}`)
        const {name , email, password, phone} = req.body;
        
        const existing =await Faculty.findOne({email});
        if (existing){
            return res.status(400).json({message:'Email exists'})
        }
        const hashPassword = await bcrypt.hash(password,10);
        const user = await Faculty.create({
            name,
            email,
            password : hashPassword,
            phone
        })
        res.status(201).json({massage:'Successfully registered user',CreateUser : user})
    }catch(err){
         console.error('Register error:', err); 
        res.status(500).json({err})
    }
})
// ✅ FIXED: debug - now works
router.get('/debug', (req, res) => {
    res.json({
        connected: mongoose.connection.readyState === 1 ? '✅ Yes' : '❌ No',
        models: mongoose.modelNames(),
        env_mongo: !!process.env.MONGODB_URI
    });
});

module.exports = router;
