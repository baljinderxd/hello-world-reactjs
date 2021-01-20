let a = ["'AM-IV'", "'COA'", "'TOC'", "'DBMS'", "'OOP'", "'CS'",
    "'NCC/NSS'", "'AM LAB'", "'COA LAB'", "'DBMS LAB'", "'CS LAB'", "'OOP LAB'"]

let b = []
for (let i = 1; i <= 12; i++) {
    if (i < 7)
        b.push(i)
    if (i === 7)
        b.push('')
    if (i > 7)
        b.push(i)
}

let c = []
for (let i = 1; i <= 12; i++) {
    if (i < 7)
        c.push(i)
    if (i === 7)
        c.push('')
    if (i > 7)
        c.push(i)
}

let foto = "https://quickchart.io/chart?width=300&height=200&c={type:'horizontalBar',data:{labels:[" + a + "],"
    + "datasets:[{label:'Internal',data:[" + b + "],backgroundColor:'rgb(108, 212, 255)',datalabels: {color: 'black'}},"
    + "{label:'External',data:[" + c + "],backgroundColor:'rgb(255, 158, 0)',datalabels: {color: 'black'}}]},"
    + "options:{scales:{xAxes:[{stacked: true}],yAxes:[{stacked: true}]},"
    + "plugins:{datalabels: {display: true,anchor: 'end',align: 'start'}}}}"
console.log(foto)
console.log(b)
console.log(c)