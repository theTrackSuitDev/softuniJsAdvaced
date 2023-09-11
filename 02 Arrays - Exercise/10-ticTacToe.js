function ticTacToe(inputArray) {
    let movesArray = inputArray.slice();
    let validMovesCounter = 0;
    let dashboard = 
    [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let nextMove = movesArray.shift();
    let currentPlayer = "X";
    let winner = false;

    while (validMovesCounter < 9) {
        nextMove = nextMove.split(" ").map(Number);
        let [row, col] = nextMove;
        if (dashboard[row][col] === false) {
            dashboard[row][col] = currentPlayer;
            validMovesCounter++;
            if (validMovesCounter > 4) {
                if (
                    dashboard[0][0] === currentPlayer &&
                    dashboard[0][1] === currentPlayer &&
                    dashboard[0][2] === currentPlayer ||

                    dashboard[1][0] === currentPlayer &&
                    dashboard[1][1] === currentPlayer &&
                    dashboard[1][2] === currentPlayer ||

                    dashboard[2][0] === currentPlayer &&
                    dashboard[2][1] === currentPlayer &&
                    dashboard[2][2] === currentPlayer ||

                    dashboard[0][0] === currentPlayer &&
                    dashboard[1][0] === currentPlayer &&
                    dashboard[2][0] === currentPlayer ||

                    dashboard[0][1] === currentPlayer &&
                    dashboard[1][1] === currentPlayer &&
                    dashboard[2][1] === currentPlayer ||

                    dashboard[0][2] === currentPlayer &&
                    dashboard[1][2] === currentPlayer &&
                    dashboard[2][2] === currentPlayer ||

                    dashboard[0][0] === currentPlayer &&
                    dashboard[1][1] === currentPlayer &&
                    dashboard[2][2] === currentPlayer ||

                    dashboard[0][2] === currentPlayer &&
                    dashboard[1][1] === currentPlayer &&
                    dashboard[2][0] === currentPlayer

                ) {
                    winner = currentPlayer;
                    break;
                } 
            }
        } else {
            nextMove = movesArray.shift();
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        nextMove = movesArray.shift();
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
    }

    if (winner) {
        console.log(`Player ${winner} wins!`);
    } else {
        console.log("The game ended! Nobody wins :(");
    }

    for (const row of dashboard) {
        console.log(row.join("\t"));
    }
}

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]);