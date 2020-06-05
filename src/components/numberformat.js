// function numberWithCommas(x) {
//     var no = x.toString()
//     if (no.length < 4)
//         return no
//     else {
//         var p = new Array, a = 0, z = no.length,q=new Array,on=''
//         for(j of no){
//             q.push(j)
//         }

//         q=q.reverse()
//         for(let i=0;i<q.length;i++){
//             on+=q[i]
//         }

//         for (i of on) {
//             p.push(i)
//             console.log(p[a])
//             a++
//             z--
//             if (z === no.length - 3) {
//                 p.push(',')
//                 console.log(p[a])
//                 a++
//             }
//             else if (z === no.length - 5||z === no.length - 7||z === no.length - 9||z === no.length - 11) {
//                 p.push(',')
//                 console.log(p[a])
//                 a++
//             }
//         }
//         var b = ''

//         if(p[p.length-1]===',')
//         p.pop()
//         p=p.reverse()
//         for (let i = 0; i < a; i++)
//             b += p[i]
//         console.log(b)
//         return b
//     }


// }
// var y = numberWithCommas(1111111)
// console.log(y)


function numberWithIndianFormatCommas(x) {
    var y = x.toString()
    if (y.length > 3) {
        var z = y.substr(y.length - 3, 3)
        y = y.substr(0, y.length - 3)
        y = y.replace(/\B(?=(\d{2})+(?!\d))/g, ",")
        return y + ',' + z
    }
    else return y
}
var result = numberWithIndianFormatCommas(123)
console.log(result)
