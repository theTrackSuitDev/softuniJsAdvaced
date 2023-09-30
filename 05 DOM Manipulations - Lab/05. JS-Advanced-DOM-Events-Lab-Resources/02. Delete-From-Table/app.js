function deleteByEmail() {
    let inputElement = document.querySelector('[name="email"]');
    if (inputElement.value === '') {
        return;
    }

    let emailToDelete = inputElement.value;

    let rowElementsArray = Array.from(document.querySelectorAll('tbody tr'));

    let rowToDelete = rowElementsArray.find(row => row.innerHTML.includes(emailToDelete));

    let resultElement = document.querySelector('#result');

    if (rowToDelete) {
        rowToDelete.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.'; 
    }      
}