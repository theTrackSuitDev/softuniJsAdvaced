function circleArea(input) {
    let inputType = typeof(input);

    inputType === 'number'
        ? console.log((input ** 2 * Math.PI).toFixed(2))
        : console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}

circleArea('name');