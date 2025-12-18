// 5) Write a program to delete a file named temp.txt using fs.unlink() and display success or
// error. (B)

const fs = require('fs');

try{
    fs.unlinkSync('temp.txt')
    console.log('Deleted Successfully')
}catch(err){
    console.log(`Error is :- ${err}`)
}
