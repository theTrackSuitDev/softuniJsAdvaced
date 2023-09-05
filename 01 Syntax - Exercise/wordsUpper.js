function wordsUpper(inputString) {
    let pattern = /[\w]+/g;
    let wordsArr = inputString.match(pattern);
    let resultArr = [];

    wordsArr.forEach(element => {
        let elementUpper = element.toUpperCase();
        resultArr.push(elementUpper);
    });

    console.log(resultArr.join(", "));
}

wordsUpper('Hi, how are you?');