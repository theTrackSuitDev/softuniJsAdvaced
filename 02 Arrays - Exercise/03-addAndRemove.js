function addAndRemove(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        
        if (command === "add") {
            resultArray.push(i + 1);
            continue;
        }

        if (command === "remove") {
            resultArray.splice(resultArray.length - 1, 1);
        }
    }

    if (resultArray[0]) {
        resultArray.forEach(element => {
            console.log(element);
        });
    } else {
        console.log("Empty");
    }
}

addAndRemove(['add', 
'add', 
'remove', 
'remove', 
'add']);