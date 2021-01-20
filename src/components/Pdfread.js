var PdfReader = require("pdfreader").PdfReader, f = [];
const fs = require('fs')
var studentresult = [], j = 2, b = false
new PdfReader().parseFileItems("sem4.pdf", function (err, item) {
  if (item && item.text) {
    if (item.text === '00413202717' || b) {
      studentresult.push(item.text)
      b = true
      if (item.text.match(/^[0-9]{11}$/g) || item.text.match(/^\((.+)\)$/g) || item.text === 'RESULT TABULATION SHEET') {
        j--
        if (j === 0) {
          b = false
        }
      }
    }
  }
  else if (!item)
    for (let index = 0; index < studentresult.length; index++) {
      console.log(studentresult[index])
      if (studentresult[index].match(/(\d{1,2}|-|A)\s+(\d{1,3}|A)/g)) {
        console.log("Int:,Ext:", studentresult[index].match(/\d{1,2}/g))
      }
    }
});