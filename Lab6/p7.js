const fs = require('fs')

// try{
//     fs.readdirSync('.',(data)=>{
//        console.log(data);
//     })
// }catch(err){
//     console.log(err);
// }
fs.readdir('My-Folder',(err,data)=>{
    if(err){
        console.log(err)
    }else(
        console.log(data)
    )
})