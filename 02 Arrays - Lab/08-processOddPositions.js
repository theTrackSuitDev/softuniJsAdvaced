function oddPositions(arr) {
    let oddPositionsArray = arr.filter((el, index) => index % 2 !== 0);
    let doubledOddArray = oddPositionsArray.map(el => el * 2);
    doubledOddArray.reverse();

    console.log(doubledOddArray.join(" "));
}
oddPositions([3, 0, 10, 4, 7, 3]);