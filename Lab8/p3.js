const express = require('express')
const fs = require('fs');
const app = express()

app.get('/about',(req,res)=>{
    
            try{
                data = fs.readFileSync('about.txt');
                res.send(data);
            }catch(err){
                
                res.send('Error Occuired');
                console.log(`Error is :-${err}`);
            }
})
app.get('/contact',(req,res)=>{
    
            try{
                data = fs.readFileSync('contact.txt');
                res.send(data);
            }catch(err){
                
                res.send('Error Occuired');
                console.log(`Error is :-${err}`);
            }
})
app.use((req,res)=>{
    res.status(404).send('Page not Found');
})
app.listen(3000,()=>{
    console.log(`server started a @3000`)
})