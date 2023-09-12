function orbit(input) {
    let inputArray = input;
    let [cols, rows, starRow, starCol] = inputArray;
    let board = [];
    for (let row = 0; row < rows; row++) {
        board.push([]);
        for (let col = 0; col < cols; col++) {
            board[row].push("X");
        }
    }

    board[starRow][starCol] = 1;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === "X") {
                let distance = Math.max(
                    Math.abs(row - starRow),
                    Math.abs(col - starCol)
                );
                board[row][col] = distance + 1;
            }
        }
    }

    board.forEach((element) => {
        console.log(element.join(" "));
    });
}
orbit([3, 3, 2, 2]);
