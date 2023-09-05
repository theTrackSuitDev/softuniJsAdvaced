function numbersCooking(num, opOne, opTwo, opThree, opFour, opFive) {
    let number = Number(num);
    let operations = [opOne, opTwo, opThree, opFour, opFive];
    for (const operation of operations) {
        switch (operation) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number += 1;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                number = (number * 100 - number * 20) / 100;
                console.log(number);
                break;
            default:
                break;
        }
    }
}
numbersCooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');