function lastKNums(n, k) {
    let resultArray = [1];
    while (resultArray.length < n) {
        let lastKArray = resultArray.slice(-k);
        let newNum = lastKArray.reduce((a, b) => a + b, 0);
        resultArray.push(newNum);
    }

    return resultArray;
}
lastKNums(8, 2);