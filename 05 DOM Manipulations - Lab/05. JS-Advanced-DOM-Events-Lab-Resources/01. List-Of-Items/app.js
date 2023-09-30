function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let inputText = inputElement.value;
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputText;

    let ulElement = document.querySelector('#items');
    if (inputElement.value !== "") {
        ulElement.appendChild(newLiElement);
    }
    
    inputElement.value = null;
}