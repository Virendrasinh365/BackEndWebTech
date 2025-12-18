const cp = require('child_process');
const { stderr } = require('process');

const child = cp.spawn('cmd.exe',['/c','dir','/s','C:\\']);

// 
child.stderr.on('data',(data)=>{
    console.log(`STDERR :- ${data}`)

})

// 
 child.stdout.on('data',(data)=>{
    console.log(`STDOUT IS :- ${data}`)
 })

 //
 child.on('close',(data)=>{
    console.log(`CLOSE:-${data}`)
 })