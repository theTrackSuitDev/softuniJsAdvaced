function add(num) {
    let sum = 0;

    let increment = (num) => {
        sum += num;
        return increment;
    }

    increment.toString = function () {
        return sum;
    }
    
    return increment(num);
}

console.log(add(3)(4).toString());