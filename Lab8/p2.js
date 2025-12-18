const express = require('express')
const app = express();

app.get('/home',(req,res)=>{
    res.send('<h1>Hello From Home Page.</h1>')
})
app.get('/about',(req,res)=>{
    res.send('Hello From about Page.')
})
app.get('/darshan',(req,res)=>{
    res.send('Hello From Darshan Page.')
})
app.get('/contact',(req,res)=>{
    res.send('Hello From contact Page.')
})
app.get('/student',(req,res)=>{
    res.send('Hello From student Page.')
})

app.use((req,res)=>{

    res.status(404).send('Page Not Found')
})
app.listen(3000,()=>{
    console.log(`Sever started at @3000`)
})