function toggle() {
    let textDivElement = document.querySelector('#extra');
    let textDivStyles = window.getComputedStyle(textDivElement);
    let displayState = textDivStyles.getPropertyValue('display');
    let toggleButtonElement = document.querySelector('.head .button');

    if (displayState === 'none') {
        textDivElement.style.display = 'block';
        toggleButtonElement.textContent = 'Less';
    } else {
        textDivElement.style.display = 'none';
        toggleButtonElement.textContent = 'More';
    }
}