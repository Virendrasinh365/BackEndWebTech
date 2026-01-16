const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
dotenv.config();

const User = require('./Models/user.js');
const app = express();

app.use(express.json());

mongoose.connect(process.env.mongourl).then(()=>{
        console.log('Db connected');
}).catch((err)=>{
    console.log(err);
})

app.post('/register',async(req,res)=>{
    try{
        const { name , email , password ,phone} = req.body;
        const hashPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password,
            phone
        });
        res.json({message:'Successfully registered new user',newUser : user})
    }catch(err){
        res.json({err})
    }
})

app.post('/login',async(req,res)=>{
    try{
        const{email,password} = req.body;
        const user = await 
    }
})