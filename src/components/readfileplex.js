const fs = require('fs');
const readline = require('readline');
var b = false, j = 2, str = '', flag = -1, len = {}, i = 0, r = {}, a = 0

async function processLineByLine() {
    const fileStream = fs.createReadStream(__dirname + '/output.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        r[a] = line
        a++
        if (line === '02113202717' || b) {
            console.log(line)
            str += line
            len[i] = line
            i++
            b = true


            if (line.length === 11 || line === /$\((.+)\)^/ || line === 'RESULT TABULATION SHEET') {
                j--
                if (j === 0) {
                    b = false
                    console.log(str)
                    return true
                }
            }
        }
    }
}
processLineByLine();
