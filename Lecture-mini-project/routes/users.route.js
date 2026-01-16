const express = require('express');

const routeUser = express.Router();

routeUser.get("/",(req,res)=>{
    res.send(" home page of user")
})



routeUser.get("/:id",(req,res)=>{
    res.send(" home page of user by id")
})

module.exports.routeUser = routeUser;