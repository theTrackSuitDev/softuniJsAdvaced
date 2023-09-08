function negativeOrPositive(inputArr) {
    let resultArray = [];
    for (const num of inputArr) {
        if (num < 0) {
            resultArray.unshift(num);
            continue;
        }

        resultArray.push(num);
    }

    resultArray.forEach(element => {
        console.log(element);
    });
}
negativeOrPositive([3, -2, 0, -1]);