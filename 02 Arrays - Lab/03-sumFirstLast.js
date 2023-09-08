function sumFirstLast(inputArray) {
    let arr = inputArray.slice();
    let sum = Number(arr.pop()) + Number(arr.shift());

    return sum;
}
sumFirstLast(['5', '10']);