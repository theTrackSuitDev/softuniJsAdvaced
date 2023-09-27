function generateReport() {
    let endResultArray = [];
    let inputElements = Array.from(document.querySelectorAll('th input'));
    const tableColsMap = new Map;
    inputElements.forEach((element, index) => {
        tableColsMap.set(element.name, index)
    });

    let checkedInputs = Array.from(document.querySelectorAll('th input:checked'));
    let checkedColIndexes = [];
    
    checkedInputs.forEach(element => {
        let index = tableColsMap.get(element.name);
        checkedColIndexes.push(index)
    });

    let tableRows = Array.from(document.querySelectorAll('tbody tr'));

    tableRows.forEach(row => {
        let cells = Array.from(row.querySelectorAll('td'));
        let reportObject = {};
        for (const index of checkedColIndexes) {
            let property = inputElements[index].name;
            let value = cells[index].textContent;
            reportObject[property] = value;
        }

        endResultArray.push(reportObject);
    });

    let resultJson = JSON.stringify(endResultArray);
    let outputElement = document.querySelector('#output');
    outputElement.value = resultJson;
}