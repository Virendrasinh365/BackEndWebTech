const express = require('express');
const routeRestaurant = express.Router('./routes/restaurants.route.js');

routeRestaurant.get("/",(req,res)=>{
    const data = getAllRestaurant;

    res.send(data)
})



routeRestaurant.get("/:id",(req,res)=>{
    res.send(" home page of restaurants by id")
})

module.exports.routeRestaurant = routeRestaurant;