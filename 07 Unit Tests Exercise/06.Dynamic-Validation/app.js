function validate() {
    let inputElement = document.querySelector('#email');
    inputElement.addEventListener('change', (event) => {
        let pattern = /[a-z]+[@][a-z]+[.][a-z]+/;
        if (!pattern.exec(inputElement.value)) {
           inputElement.classList.add('error'); 
        } else {
            inputElement.classList.remove('error');
        }
    });
}