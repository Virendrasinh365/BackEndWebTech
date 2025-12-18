const http = require('http');
const server = http.createServer((req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.write('hello world from DU');
    res.end();

})
server.listen(3000,()=>{
    console.log('server started @3000');
});