const express = require('express')
const app = express()

function greet = (req,res,next)=>{
   if(req.url.indexOf('about')==-1){
    next()
   }
    console.log('good morning');

}
app.use('/du',greet)
app.get('/du/home',(req,res)=>{
    console.log("Hello from darshan");
    res.send('_');
});
app.get('/du/about/',(req,res)=>{
    console.log('about from darshan');
    res.send('_');

});
app.get('/du/contact',(req,res)=>{
    console.log('contact from darshan');
    res.send('_');
});