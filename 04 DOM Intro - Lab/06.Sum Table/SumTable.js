function sumTable() {
    let tableDataItems = document.getElementsByTagName('td');

    let dataArray = Array.from(tableDataItems);

    dataArray.pop();
    dataArray.pop();

    let result = 0;

    dataArray.forEach((element, index) => {
        if (index % 2 != 0) {
            result += Number(element.textContent);
        }
    });

    document.getElementById('sum').textContent = result;
}