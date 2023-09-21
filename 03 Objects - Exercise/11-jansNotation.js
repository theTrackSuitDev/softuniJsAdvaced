function jansNotation(inputArray) {
    let instructions = inputArray.slice();
    let numbers = [];

    while (instructions.length > 0) {
        let currentInstruction = instructions.shift();
        if (typeof currentInstruction === "number") {
            numbers.push(currentInstruction);
            continue;
        }

        if (numbers.length < 2) {
            console.log("Error: not enough operands!");
            return;
        }

        let numTwo = numbers.pop();
        let numOne = numbers.pop();
        let result = 0;

        switch (currentInstruction) {
            case "+":
                result = numOne + numTwo;
                break;
            case "-":
                result = numOne - numTwo;
                break;
            case "*":
                result = numOne * numTwo;
                break;
            case "/":
                result = numOne / numTwo;
                break;

            default:
                break;
        }

        numbers.push(result);
    }

    if (numbers.length > 1) {
        console.log("Error: too many operands!");
        return;
    }

    console.log(numbers[0]);
}

jansNotation([7, 33, 8, "-"]);
