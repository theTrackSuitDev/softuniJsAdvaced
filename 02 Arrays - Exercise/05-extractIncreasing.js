function extractIncreasing(array) {
    let currentBiggest = array[0];
    let resultArray = [];
    for (const num of array) {
        if (num >= currentBiggest) {
            currentBiggest = num;
            resultArray.push(num);
        }
    }

    return resultArray;
}

extractIncreasing([20, 
    3, 
    2, 
    15,
    6, 
    1]);