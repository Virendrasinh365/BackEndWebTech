const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const User = require('./Models/user.js');
const app = express();

app.use(express.json());

mongoose.connect(process.env.mongourl).then(()=>{
    console.log('Db Conected');
    
}).catch((err)=>{
    console.log(err);
    
})



// get method
app.get('/user',async(req,res)=>{
    try{
        const user = await User.find();
        res.json({message:"Seccessfully fetched ",allUser:user})
    }catch(err){
        res.json(err);
    }
})

// get by id
app.get('/user/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            res.status(404).json({message:'user not found'})
        }
        res.json({message:'Suuccessfuly',OneUser : user})

    }
    catch(err){
        res.json({err});
    }
})

// Create 
app.post('/register',async(req,res)=>{
    try{
        const {name , email, password, phone} = req.body;
        const user = await User.create({
            name,
            email,
            password,
            phone
        })
        res.json({massage:'Successfully registered user',CreateUser : user})
    }catch(err){
        res.status(404).json({err})
    }
})

// Update
app.patch('/Update/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {
                new : true
            }
        )
        res.json({message : 'Successfully Update', updatedUser : user })
    }catch(err){
        res.json({err})
    }
})

// delete
app.delete('/delete/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user){
            res.status(404).json({message:'user Not Found'})
        }
        res.json({message : 'User deleted Successfully ',deleteUser : user})
    }catch(err){
        res.json({err})
    }
})


app.listen(3000,()=>{
    console.log('Server Started @3000');
})