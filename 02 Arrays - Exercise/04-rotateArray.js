function rotateArray(array, number) {
    let arrayToRotate = array.slice();
    for (let i = 0; i < number; i++) {
        let currentLast = arrayToRotate.pop();
        arrayToRotate.unshift(currentLast);        
    }

    console.log(arrayToRotate.join(" "));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);