function extractText() {
    let items = document.querySelectorAll('#items li');

    let itemsArray = Array.from(items);

    let textArray = [];

    itemsArray.forEach(element => {
        textArray.push(element.textContent)
    });

    let resultItem = document.getElementById('result');

    resultItem.value = textArray.join('\n');
}