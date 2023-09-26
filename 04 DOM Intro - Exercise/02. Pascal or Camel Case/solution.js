function solve() {
  let textToConvert = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;

  let textArray = textToConvert.split(" ");
  textArray = textArray.map(el => el.toLowerCase());
  let isError = false;
  
  switch (convention) {
    case 'Pascal Case':
      textArray = textArray.map(el => `${el[0].toUpperCase()}${el.slice(1)}`)
      break;

    case 'Camel Case':
      for (let i = 1; i < textArray.length; i++) {
        textArray[i] = `${textArray[i][0].toUpperCase()}${textArray[i].slice(1)}`;
      }
      break;
  
    default:
      isError = true;
      break;
  }

  let result = document.querySelector('#result');
  
  isError
    ? result.textContent = 'Error!'
    : result.textContent = textArray.join('');
}
