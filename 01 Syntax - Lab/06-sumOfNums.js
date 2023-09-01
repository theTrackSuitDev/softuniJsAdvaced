function sumOfNums(one, two) {
    let firstNum = Number(one);
    let secondNum = Number(two);

    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;        
    }
    
    console.log(sum);
}

sumOfNums('8', '8');