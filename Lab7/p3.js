const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain')
   if (req.url == '/Home') {
        res.statusCode = 200;
        res.write('<h1> hello from home page</h1>');

    }
    else if (req.url == '/contact') {
        res.statusCode = 200;
        try{
            data = fs.readFileSync('contact.txt');
            res.write(data);
        }catch(err){
            
            res.write('Error Occuired');
            console.log(`Error is :-${err}`);
        }

    } else if (req.url == '/about') {
        res.statusCode = 200;
        try{
             data = fs.readFileSync('about.txt');
            res.write(data);
        }catch(err){
            res.write('Error Occuired');
            console.log(`Error is :-${err}`);
        }
    } else {
        res.statusCode = 404;
        res.write('Page not found');
    }
    res.end();
})
server.listen(3000,()=>{
    console.log('Srever started @3000');
})