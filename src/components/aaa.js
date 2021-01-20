const fs = require('fs');
const readline = require('readline');
var b = false, j = 2, str = '', len = {}, i = 0, studentresult = [], flag = -1, ttl = 0

function displayResult(result, flag, counted, tt, counted2) {
    if (flag === -1)
        console.log('no result')
    else {
        // let display
        // display = 'Name: ' + result[1]
        // display += '\nEnrollment No: ' + result[0]
        // display += '\nSemester: Fourth'
        // display += '\nAM - IV: ' + result[result.indexOf('27204(4)') - 1]
        // display += '\nCOA: ' + result[result.indexOf('27206(4)') - 1]
        // display += '\nTOC: ' + result[result.indexOf('27208(4)') - 1]
        // display += '\nDBMS: ' + result[result.indexOf('27210(3)') - 1]
        // display += '\nOOP: ' + result[result.indexOf('28212(4)') - 1]
        // display += '\nCS: ' + result[result.indexOf('99250(1)') - 1]
        // display += '\nNCC/NSS: ' + result[result.indexOf('99252(1)') - 1]
        // display += '\nAM LAB: ' + result[result.indexOf('27254(1)') - 1]
        // display += '\nCOA LAB: ' + result[result.indexOf('27256(1)') - 1]
        // display += '\nDBMS LAB: ' + result[result.indexOf('28256(1)') - 1]
        // display += '\nCS LAB: ' + result[result.indexOf('27258(1)') - 1]
        // display += '\nOOP LAB: ' + result[result.length - 3]
        // display += '\nCredits: ' + result[result.length - 2]`

        var intds=[],extds=[]

        for (let i = 0; i < result.length - 2; i++) {
            //console.log(result[i])
            // if(result[i].match(/(0?[0-9]|[1-3][0-9]|40|-|A)\s+(0?[0-9]|[1-9][0-9]|100|A)\b/g)){
            if (result[i].match(/(\d{1,2}|-|A)\s+([0-9]{1,3}|A)/g)) {
                console.log("Int:,Ext:", result[i].match(/\d{1,3}|-|A/g))

            }

            else if (result[i].match(/A|-|[0-9]{1,2}/) && result[i + 2].match(/^([0-9]{1,3}\([A-P].*\).*)|A$/)
                && result[i - 1].match(/^[0-9]{4,5}\([0-9]\)$/)) {
                console.log('Int:', result[i].match(/A|-|[0-9]{1,2}/g))
            }

            else if (result[i].match(/A|-|[0-9]{1,3}/) && result[i + 1].match(/(^[0-9]{1,3}\([A-P].*\).*)|A$/)
                && result[i - 2].match(/^[0-9]{4,5}\([0-9]\)$/)) {
                console.log('Ext:', result[i].match(/A|-|[0-9]{1,3}/g))
            }

        }
        // console.log('Total marks:', tt)
        // var per = tt / 1200 * 100
        // console.log('Percentage:', per.toFixed(2))
        // counted = counted.sort(function (a, b) { return b - a })
        // var rank
        // rank = counted.indexOf(tt)
        // console.log("Rank uni:", rank + 1)
        // counted2 = counted2.sort(function (a, b) { return b - a })
        // rank = counted2.indexOf(tt)
        // console.log("Rank cllg:", rank + 1)


    }
}

async function processLineByLine(code) {
    let bool = false, tempttl = 0, sbjct = 0, j1 = 2, counted = [], boo = false, j2 = 2, counted2 = [], temptt = 0, newres = ''
    const fileStream = fs.createReadStream(__dirname + '/sem417.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    var regex = new RegExp('^[0-9]{3}' + code + '[0-9]{3}1[7|8]$')
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        if (line === '01413202717' || b) {
            studentresult.push(line)
            if (line.match(/^[0-9]{1,3}\([A|B|C|F|O|P].*\).*$/)) {
                let sbjct = line.substr(0, line.indexOf('('))
                ttl += parseInt(sbjct, 10)
            }
            str += line
            len[i] = line
            i++
            b = true
            flag = 1


            if (line.match(/^[0-9]{11}$/g) || line.match(/^\((.+)\)$/g) || line === 'RESULT TABULATION SHEET') {
                j--
                if (j === 0) {
                    b = false
                }
            }
        }
        if (line.match(/^[0-9]{9}1[0-9]$/) || bool) {
            bool = true
            if (line.match(/^[0-9]{1,3}\([A-P].*\).*$/)) {
                sbjct = line.substr(0, line.indexOf('('))
                tempttl += parseInt(sbjct, 10)

            }
            if (line.match(/^[0-9]{9}1[1-9]$/g) || line === '(END OF LINE)') {

                j1--
                if (j1 === 0) {
                    if (!counted.includes(tempttl))
                        counted.push(tempttl)
                    tempttl = 0
                    j1 = 1
                }
            }
        }
        if (line.match(regex) || boo) {
            boo = true
            if (line.match(/^[0-9]{1,3}\([A-P].*\).*$/)) {
                sbjct = line.substr(0, line.indexOf('('))
                temptt += parseInt(sbjct, 10)

            }
            if (line.match(regex) || line.match(/^\(.+\)$/)) {

                j2--
                if (j2 === 0) {
                    if (!counted2.includes(temptt))
                        counted2.push(temptt)
                    temptt = 0
                    j2 = 1
                    if (line.match(/^\(.+\)$/))
                        boo = false
                }
            }
        }

    }
    displayResult(studentresult, flag, counted, ttl, counted2)
}
processLineByLine('132');
