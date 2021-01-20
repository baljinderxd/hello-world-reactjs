function sibling(N, arr, person) {
    let level, sibling = [];
    for (let i = 0; ; i++) {
        if (person >= Math.pow(2, i) && person < Math.pow(2, i + 1)) {
            level = i;
            break;
        }
    }

    for (let i = Math.pow(2, level); i < Math.pow(2, level + 1); i++) {
        if (arr.includes(i) && i != person) {
            sibling.push(i);
        }
    }

    if (sibling.length === 0)
        sibling.push(-1);

    return sibling;

}

console.log(sibling(6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10));