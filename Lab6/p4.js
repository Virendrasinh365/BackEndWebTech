const fs = require('fs')

try {
  fs.appendFileSync('p4.txt', '\n appened data ');
  console.log('The "data to append" was appended to file!');
} catch (err) {
  console.log(`error is :- ${err}`)
}