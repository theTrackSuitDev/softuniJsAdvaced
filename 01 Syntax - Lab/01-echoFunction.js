function echo(inputString) {
    let string = inputString;
    let length = inputString.length;
    let answers = [length, string];

    answers.forEach(element => {
        console.log(element);
    });
}

echo('strings are easy');