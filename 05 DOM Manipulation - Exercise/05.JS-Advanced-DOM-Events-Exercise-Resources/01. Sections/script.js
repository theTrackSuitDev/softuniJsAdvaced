function create(words) {
   let inputArrayOfStrings = words.slice();
   inputArrayOfStrings.forEach(text => {
      let newDiv = document.createElement('div');
      let newPar = document.createElement('p');
      newPar.textContent = text;
      newPar.style.display = 'none';
      newDiv.appendChild(newPar);
      newDiv.addEventListener('click', revealParagraph);

      function revealParagraph(event) {
         let pChildElement = event.currentTarget.querySelector('p');
         pChildElement.style.display = 'block';
      }

      let contentElement = document.querySelector('#content');
      contentElement.appendChild(newDiv);
   });
}