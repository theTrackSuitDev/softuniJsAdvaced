function diagonalAttack(input) {
    let matrix = input.map(el => el.split(" ").map(Number));
    
    let diagonalOneSum = 0;
    let diagonalTwoSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonalOneSum += matrix[i][i];        
    }

    let lastIndex = matrix.length - 1;
    for (let k = 0; k < matrix.length; k++) {
        diagonalTwoSum += matrix[lastIndex][k];
        lastIndex--;
    }


    if (diagonalOneSum === diagonalTwoSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (col !== row && col + row != matrix.length - 1) {
                    matrix[row][col] = diagonalOneSum;
                }
            }
            
        }
    }

    matrix.forEach(element => {
        console.log(element.join(" "));
    });
}

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);