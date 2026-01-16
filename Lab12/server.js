const app = require('./app.js')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config();


mongoose.connect(process.env.mongourl)
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err);
})


app.listen(process.env.Port ,()=>{
    console.log(`Server Started At @${process.env.Port}`);
    
})
