function solve(A, B) {
    let ans = [], stree = [];

    if (A[0] === '0') {
        stree[0] = 1;
    }
    else {
        stree[0] = 0;
    }
    for (let i = 1; i < A.length; i++) {
        if (A[i] === '0') {
            stree[i] = stree[i - 1] + 1;
        }
        else {
            stree[i] = stree[i - 1];
        }
    }
    for (let i = 0; i < B.length; i++) {
        let l = B[i][0] - 1;
        let r = B[i][1] - 1;
        let s = A.substr(l, r - l + 1);
        console.log(s)
        let fl = s.indexOf('1');
        let fr = s.lastIndexOf('1');
        if (fl === -1 || fr === -1) {
            ans.push(0);
        }
        else {
            ans.push(stree[fr] - stree[fl]);
        }
    }
    return ans;
}
let b = [
    [3, 4],
  [1, 1],
  [1, 6],
  [1, 5],
  [2, 7],
  [3, 9]
]
solve('000111111', b);