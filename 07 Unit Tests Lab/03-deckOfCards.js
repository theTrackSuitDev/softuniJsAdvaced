function printDeckOfCards(cards) {
    function createCard(face, suit) {
        let faces = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "J",
            "Q",
            "K",
            "A",
        ];

        let symbolsMap = new Map();
        symbolsMap.set("S", "\u2660");
        symbolsMap.set("H", "\u2665");
        symbolsMap.set("D", "\u2666");
        symbolsMap.set("C", "\u2663");

        if (!faces.includes(face) || !symbolsMap.has(suit)) {
            return {
                "Invalid card": `${face}${suit}`,
            };
        }

        let result = {
            face,
            suit,
            toString() {
                return `${this.face}${symbolsMap.get(this.suit)}`;
            },
        };

        return result;
    }

    let deck = [];
    let hasInvalid = false;
    cards.forEach((element) => {
        let cardArray = element.split("");
        let suit = cardArray.splice(-1, 1)[0];
        let face = cardArray.join("");

        let currentCard = createCard(face, suit);

        if (currentCard.hasOwnProperty("Invalid card")) {
            hasInvalid = true;
            console.log(`Invalid card: ${currentCard["Invalid card"]}`);
            return;
        }

        deck.push(currentCard);
    });

    if (!hasInvalid) {
        console.log(deck.join(" "));
    }
}

printDeckOfCards(["5S", "3D", "QD", "1C"]);
