function smallestTwo(input) {
    let inputArray = input.slice();
    inputArray.sort((a, b) => a - b);
    let resultArray = inputArray.slice(0, 2);

    console.log(resultArray.join(" "));
}
smallestTwo([3, 0, 10, 4, 7, 3]);