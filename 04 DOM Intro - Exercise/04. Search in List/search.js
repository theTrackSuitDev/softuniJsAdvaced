function search() {
   let listItemElements = document.querySelectorAll('#towns li');
   let listItemArray = Array.from(listItemElements);

   let matchesCount = 0;
   let searchText = document.querySelector('#searchText').value;

   for (let i = 0; i < listItemArray.length; i++) {
      let element = listItemArray[i];
      if (element.textContent.includes(searchText)) {
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
         matchesCount++;
         continue;
      }

      element.style.textDecoration = 'none';
      element.style.fontWeight = '0';
   }

   let resultElement = document.querySelector('#result');
   resultElement.textContent = `${matchesCount} matches found`;
}
