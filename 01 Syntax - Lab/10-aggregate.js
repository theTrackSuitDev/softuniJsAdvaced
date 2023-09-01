function aggregate(inputArray) {
    let sum = inputArray.reduce((a, b) => a + b, 0);

    let inverseArray = inputArray.map((el) => 1 / el);
    let inverseSum = inverseArray.reduce((a, b) => a + b, 0);
    
    let stringSum = stringify(inputArray);

    console.log(sum);
    console.log(inverseSum);
    console.log(stringSum);

    function stringify(arr) {
        let result = '';
        for (const num of arr) {
            result += num;
        }
        return result;
    }

}
aggregate([2, 4, 8, 16]);