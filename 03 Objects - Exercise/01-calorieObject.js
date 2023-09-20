function calorie(inputArray) {
    let resultObject = {};

    for (let i = 0; i < inputArray.length; i += 2) {
        resultObject[inputArray[i]] = Number(inputArray[i + 1]);
    }

    console.log(resultObject);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);