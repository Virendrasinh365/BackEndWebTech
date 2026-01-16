const express = require('express');

const routeRestaurant = require('')

const app = express();

app.use("/restaurants",routeRestaurant);


app.listen(3000,()=>{
    console.log(`server Started @3000`);
    
})