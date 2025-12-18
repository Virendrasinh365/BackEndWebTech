// 6) Write a program that creates a folder named my-data using fs.mkdir(). If the folder already
// exists, show an appropriate message.
const fs = require('fs');


try{
        fs.mkdirSync('My-Folder');
        console.log('folder created success');
}catch(err){
        if(err.code === 'EEXIST'){
        console.log(err);
    }
}
   
