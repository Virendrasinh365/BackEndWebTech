const url = require('url')

const url2 =  'https://darshanums.in/StudentPanel/LMS/LMS_Content_SubjectWiseContentList.aspx?SubjectID=123/hello?id=26579'

const ob = new URL(url2)
// console.log(ob.pathname);
// console.log(ob.hostname);
// console.log(ob.protocol);

ob.searchParams.forEach((value,key)=>{
    console.log(`\t Key:${key} value:${value}`)

})
