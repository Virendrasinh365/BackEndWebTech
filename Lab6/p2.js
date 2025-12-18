const fs = require('fs');
// SYNC
console.log('Start')
try{
        data = fs.readFileSync('readinfo.txt','utf-8');
        console.log(data)

}catch(err){
    console.log(`error is :- ${err}`)
}
console.log('END');

