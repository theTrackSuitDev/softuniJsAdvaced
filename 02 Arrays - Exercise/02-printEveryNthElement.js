function printNth(array, number) {
    let resultArray = [];

    for (let i = 0; i < array.length; i+=number) {
        resultArray.push(array[i]);
    }

    return resultArray;
}
printNth(['1', 
'2',
'3', 
'4', 
'5'], 
6);