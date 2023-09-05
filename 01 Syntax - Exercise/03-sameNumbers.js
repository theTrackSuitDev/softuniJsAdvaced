function sameNumbers(num) {
    
    let numArray = num.toString().split('');
    let areSame = true;
    for (let i = 0; i < numArray.length - 1; i++) {
        const element = numArray[i];
        if (element != numArray[i + 1]) {
            areSame = false;
            break;
        }
    }

    numArray = numArray.map(Number);
    let sum = numArray.reduce((a, b) => a + b, 0);

    console.log(areSame);
    console.log(sum);
}

sameNumbers(1234);