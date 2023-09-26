function solve() {
  let inputElement = document.querySelector('#input');
  let textToFormat = inputElement.value;
  let sentencesArray = textToFormat.split('.');
  sentencesArray = sentencesArray.filter(sentence => sentence.length > 0);

  let sentenceCounter = 0;
  let text = '';
  let paragraphArray = [];
  for (let i = 0; i < sentencesArray.length; i++) {
    let currentSentence = sentencesArray[i] + '.';
    text += currentSentence;
    sentenceCounter++;

    if (sentenceCounter == 3 || i == sentencesArray.length - 1) {
      let paragraph = `<p>${text}</p>`;
      paragraphArray.push(paragraph);
      sentenceCounter = 0;
      text = '';
    }    
  }

  document.querySelector('#output').innerHTML = paragraphArray.join('');
}