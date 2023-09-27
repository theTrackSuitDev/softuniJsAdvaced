function solve() {

    const binaryOption = document.createElement('option');
    const binaryTitle = document.createTextNode('Binary');
    binaryOption.setAttribute('value', 'binary')
    binaryOption.appendChild(binaryTitle);

    const hexOption = document.createElement('option');
    const hexTitle = document.createTextNode('Hexadecimal');
    hexOption.setAttribute('value', 'hexadecimal')
    hexOption.appendChild(hexTitle);

    const selectElement = document.querySelector('#selectMenuTo');
    selectElement.appendChild(binaryOption);
    selectElement.appendChild(hexOption);

    document.querySelector('#container button').addEventListener('click', convert);

    function convert() {
        let inputElement = document.querySelector('#input');
        let numberToConvert = inputElement.value;
        
        const selectedOption = document.querySelector('#selectMenuTo option:checked').value;

        let resultElement = document.querySelector('#result');

        switch (selectedOption) {
            case 'binary':
                let binResult = (numberToConvert >>> 0).toString(2);
                resultElement.value = binResult;
                break;

            case 'hexadecimal':
                let hexResult = (numberToConvert >>> 0).toString(16);
                resultElement.value = hexResult.toUpperCase();
                break;
        
            default:
                break;
        }
    }
}