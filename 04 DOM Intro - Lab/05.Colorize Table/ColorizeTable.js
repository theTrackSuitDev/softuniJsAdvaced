function colorize() {
    let rowItems = document.getElementsByTagName("tr");

    let rowArray = Array.from(rowItems);

    rowArray.shift();

    for (let i = 0; i < rowArray.length; i+=2) {
        rowArray[i].style.backgroundColor = 'teal';
    }
}