function addItem() {
    let newItemTextElement = document.querySelector('#newItemText');
    let newItemValueElement = document.querySelector('#newItemValue');

    let newItemText = newItemTextElement.value;
    let newItemValue = newItemValueElement.value;

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = newItemText;
    newOptionElement.value = newItemValue;

    let menuElement = document.querySelector('#menu');
    if (newItemText.length > 0 && newItemValue.length > 0) {
        menuElement.appendChild(newOptionElement);
    }

    newItemTextElement.value = null;
    newItemValueElement.value = null;
}