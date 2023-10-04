function solution(number) {
    let numOne = number;
    let add = function (numTwo) {
        return numOne + numTwo;
    };
    return add;
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));