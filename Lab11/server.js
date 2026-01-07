const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.mongourl).then(()=>{
    console.log('Db conected');
    
}).catch((err)=>{
    console.log(err);
})

const facultyRoutes=require("./routes/Faculty.js");
app.use("/faculty", facultyRoutes);



app.listen(process.env.Port,()=>{
    console.log(`server Started AT ${process.env.PORT}`)
})