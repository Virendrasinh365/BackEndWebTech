// child proccess

const child_process = require('child_process')

// child_process.exec('node --version',(err,stdout,stderr)=>{
//     if(err){
//         console.log('Node Error is :- '+err)

//     }
//     if(stderr){
//         console.log('Js file err is :- '+stderr)
//     }
//     console.log(stdout);
// })

child_process.exec('python p1.py',(err,stdout,stderr)=>{
    if(err){
        console.log('Node Error is :- '+err)

    }
    if(stderr){
        console.log('Js file err is :- '+stderr)
    }
    console.log(stdout);
})
