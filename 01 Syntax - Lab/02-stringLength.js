function stringLength(strOne, strTwo, strThree) {
    let strArray = [strOne, strTwo, strThree];
    strArray = strArray.map((el) => el.length);
    let sum = strArray.reduce((a, b) => (a + b), 0);
    let average = Math.floor(sum / strArray.length); 

    console.log(sum);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');