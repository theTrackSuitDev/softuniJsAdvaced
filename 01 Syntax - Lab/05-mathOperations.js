function mathOperations(numOne, numTwo, operator) {
    let result = 0;

    switch (operator) {
        case '+':
            result = numOne + numTwo;
            break;
        case '-':
            result = numOne - numTwo;
            break;
        case '*':
            result = numOne * numTwo;
            break;
        case '/':
            result = numOne / numTwo;
            break;
        case '%':
            result = numOne % numTwo;
            break;
        case '**':
            result = numOne ** numTwo;
            break;
    
        default:
            break;
    }

    console.log(result);
}

mathOperations(3, 5.5, '*');