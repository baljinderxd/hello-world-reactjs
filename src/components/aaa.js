var result = new Array, flag = -1, answer = ''
var PdfReader = require("pdfreader").PdfReader
new PdfReader().parseFileItems(__dirname + '/sem4.pdf',
            function (err, item) {
                
                if (err) {
                    console.log('inside pdf reader err')
                    console.log(err)
                    res.end(err)
                }
                if (item && item.text)
                    result.push(item.text)
                if (!item && result.length !== 0) {
                    for (let i = 0; i < result.length; i++) {
                        if (result[i] === '00413202717') {
                            flag = i
                            console.log('File readed')
                        }
                    }
                    if (flag === -1)
                        answer = 'Sorry!!No result Found'
                    else {
                        for (let i = flag; i < flag + 20; i++)
                            answer += result[i]
                    }
                   console.log(answer)
                }
            })
