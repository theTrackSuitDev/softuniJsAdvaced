function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let inputText = inputElement.value;
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputText;
    let deleteLinkElement = document.createElement('a');
    deleteLinkElement.href = '#';
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.addEventListener("click", (event) => {
        deleteLinkElement.parentNode.remove();
    });
    newLiElement.appendChild(deleteLinkElement);

    let ulElement = document.querySelector('#items');
    if (inputElement.value !== "") {
        ulElement.appendChild(newLiElement);
    }
    
    inputElement.value = null;
}