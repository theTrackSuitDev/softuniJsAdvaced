function solution() {
    let str = "";

    let result = {
        append(inputStr) {
            str += inputStr;
        },

        removeStart(num) {
            str = str.slice(num);
        },

        removeEnd(num) {
            str = str.slice(0, str.length - num);
        },

        print() {
            console.log(str);
        },
    };

    return result;
}

let secondZeroTest = solution();

secondZeroTest.append("123");
secondZeroTest.append("45");
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
