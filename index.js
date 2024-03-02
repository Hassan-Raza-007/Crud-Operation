// console.log('Hello World');

// const sum = 3+3;
// console.log(sum);

//***** About JS *******/

//Javascript is Single Thread Language hai 
//Jisme pehly 1 task complete hota hai phir dosra run hota hai
//means k jb ek task excecute horha hai tb tk baqi tasks queue me hoty hein

//*****  Node.js website ki Docs me hamein buhat sari cheezien  ******/
//fs "file System" files ko manipulate krny me use hota hai
//fs ko import node me require() use krky krty hein jisme hamy node modules ki need nhi hoti

// const fs = require('fs'); //ye ek module haiں

//**************** Sync Task  
// fs.writeFileSync('text.txt','Hello World!');   // file create with name and format 



// const res = fs.readFileSync('text.txt','utf-8'); 
// console.log(res)


//**************** Async Task
fs.writeFile('text.txt','Hello World!',()=>{

});  
