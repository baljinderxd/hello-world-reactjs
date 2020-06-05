
 var fs = require('fs'),
//     readline = require('readline');

// var rd = readline.createInterface({
//     input: fs.createReadStream('output.txt'),
//     output: process.stdout,
//     console: false
// });
// var result={},i=0,flag=-1,j=41
// rd.on('line', function(line) {
// result[i]=line
    
//     if(line==='01413202717'||flag<i){
//     console.log(line)
//     if()
//     flag=i
//     }
//    i++
// });

// if(flag===-1)
// console.log("nahi mila result")
// else 
// console.log(result[flag])
// var str = '',i,s=''
// fs.readFile('output.txt', 'utf-8', (err, data) => {
//     if (err)
//         throw (err)
//     str = data
//     var n = str.search("01413202717")
//     console.log(n)
//     for(i=n;i<n+500;i++)
//     s=s+str[i]
//     console.log(s)
// })

const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('output.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
var res={},i=0,flag=-1
  for await (const line of rl) {
      res[i]=line
      

    // Each line in input.txt will be successively available here as `line`.
    if(line==='01413202717'){
       
        var j=flag+40
        console.log(i,flag,line,res[i-1])
    }
    i++

    }
  }
  if(flag===-1)
  console.log('No result found')
 

processLineByLine();


// // import React from 'react'
// var PdfReader = require("pdfreader").PdfReader
// const fs = require('fs')
// var pre = {}, i = 0, j = 1, str = '\n'
// new PdfReader().parseFileItems('sem4.pdf', function (err, item) {
//     if (item && item.text) {
//         pre[i] = item
//         i++

//     }
//     if (!item) {
//         // for (j = 0; j < i; j++) {
//         //     if (pre[j].text === '01413202717') {
//         //         var flag = j
//         //     }
//         // }
//         for (j = 0; j < i; j++){

//             str+=pre[j].text+"\n"

//         }
//         fs.appendFile('output.txt',str,(err)=>{
//             if(err)
//             throw err
//         })
       
    
        
//     }

// })

// fs.close(2,err=>{
//     if(err)
//     throw(err)
// })

// // function Pdfread() {




// //     return (
// //         <div>
// //             str
// //         </div>
// //     )
// // }


// // export default Pdfread

// ax.get('/fourthSem.pdf').then(function(response){

//     new PdfReader().parseFileItems("./fourthSem.pdf",
//         function (err, item) {
//             if (err) callback(err)

//             if (item && item.text) {
//                 pre[i] = item
//                 i++
//             }
//             if (!item) {
//                 for (j = 0; j < i; j++) {
//                     if (pre[j].text === '01413202717') {
//                         flag = j
//                         break
//                     }
//                 }
//                 if (flag === -1) {
//                     str = "Sorry, can't find your result."
//                 }
//                 else {
//                     for (j = flag; j < flag + 20; j++) {
//                         str += pre[j].text
//                     }
//                 }

//                 ax.post(urlapi, {
//                     chat_id: msg.chat.id,
//                     text: str
//                 }).then(response => {
//                     res.end('ok')
//                 }).catch(err =>
//                     res.end('Error: ' + err))
//             }

//         })

//     }).catch(function (err){
//         console.log('Error',err)
//         res.end(err)
//     })
