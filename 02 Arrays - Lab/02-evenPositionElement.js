function evenPosition(inputArray) {
    let resultArray = [];
    inputArray.forEach((element, index) => {
        if (index % 2 == 0) {
            resultArray.push(element);
        }
    });
    
    console.log(resultArray.join(" "));
}
evenPosition(['20', '30', '40', '50', '60']);