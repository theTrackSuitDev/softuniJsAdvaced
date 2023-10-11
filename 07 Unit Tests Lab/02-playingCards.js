function playingCards(face, suit) {
    let faces = [
        '2','3','4','5','6','7','8','9','10','J','Q','K','A'
    ];

    if (!faces.includes(face)) {
        throw new Error('Invalid face!');
    }

    let result = {
        face,
        suit,
        toString() {
            let symbolsMap = new Map();
            symbolsMap.set('S', '\u2660');
            symbolsMap.set('H', '\u2665');
            symbolsMap.set('D', '\u2666');
            symbolsMap.set('C', '\u2663');

            return `${this.face}${symbolsMap.get(suit)}`
        }
    }

    return result;
}

let card = playingCards('1', 'C');
console.log(card.toString());

