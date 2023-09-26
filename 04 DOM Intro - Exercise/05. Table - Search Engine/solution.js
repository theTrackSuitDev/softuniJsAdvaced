function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableDataElements = document.querySelectorAll('tbody tr')
      let rowsArray = Array.from(tableDataElements);
      let inputText = document.querySelector('#searchField').value;

      for (let i = 0; i < rowsArray.length; i++) {
         let currentRow = rowsArray[i];
         let cells = currentRow.querySelectorAll('td');
         for (let j = 0; j < cells.length; j++) {
            const currentCell = cells[j];
            if (currentCell.textContent.includes(inputText) && inputText.length > 0) {
               currentRow.classList.add('select');
               break;
            } else {
               delete currentRow.classList.remove('select');
            }  
         }
      }
   }
}