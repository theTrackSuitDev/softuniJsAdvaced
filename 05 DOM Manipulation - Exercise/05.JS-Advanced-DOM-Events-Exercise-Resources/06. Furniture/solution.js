function solve() {
    let buttonElements = Array.from(document.querySelectorAll('button'));
    let generateButton = buttonElements[0];
    let buyButton = buttonElements[1];

    let inputElement = Array.from(document.querySelectorAll('textarea'))[0];
    let outputElement = Array.from(document.querySelectorAll('textarea'))[1];
    inputElement.value = null;
    outputElement.value = null;

    generateButton.addEventListener('click', generate);
    buyButton.addEventListener('click', buy);

    function generate() {
        let input = inputElement.value;
        let inputArray = JSON.parse(input);

        let tableBodyElement = document.querySelector('tbody');

        for (const productObj of inputArray) {
            let newRow = document.createElement('tr');
            let tdArray = [];
            for (let i = 0; i < 5; i++) {
                let newTd = document.createElement('td');
                tdArray.push(newTd);               
            }

            let imgEl = document.createElement('img');
            imgEl.src = productObj.img;
            tdArray[0].appendChild(imgEl);

            let nameP = document.createElement('p');
            nameP.textContent = productObj.name;
            tdArray[1].appendChild(nameP);

            let priceP = document.createElement('p');
            priceP.textContent = productObj.price;
            tdArray[2].appendChild(priceP);

            let decP = document.createElement('p');
            decP.textContent = productObj.decFactor;
            tdArray[3].appendChild(decP);

            let checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            tdArray[4].appendChild(checkBox);

            tdArray.forEach(td => {
                newRow.appendChild(td);
            });

            tableBodyElement.appendChild(newRow);
        }
    }

    function buy() {
        let checkedElements = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
        
        let productsArray = [];
        let totalPrice = 0;
        let totalDec = 0;

        checkedElements.forEach(checkBox => {
            let paragraphs = Array.from(checkBox.parentElement.parentElement.querySelectorAll('p'));
            productsArray.push(paragraphs[0].textContent);
            totalPrice += Number(paragraphs[1].textContent);
            totalDec += Number(paragraphs[2].textContent);
        });

        let avgDec = totalDec / checkedElements.length;

        outputElement.value += `Bought furniture: ${productsArray.join(', ')}\n`;
        outputElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputElement.value += `Average decoration factor: ${avgDec}`;
    }
}