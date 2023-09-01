function square(input) {
    let size = input;
    if (!size) {
        size = 5;
    }

    for (let row = 0; row < size; row++) {
        let printRow = '';
        for (let col = 0; col < size; col++) {
            printRow += '* ';            
        }
        console.log(printRow);
    }
}
square(7);