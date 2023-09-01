function fruit(fruitType, amountGr, priceKg) {
    let total = amountGr / 1000 * priceKg;

    console.log(`I need $${total.toFixed(2)} to buy ${(amountGr / 1000).toFixed(2)} kilograms ${fruitType}.`);
}

fruit('apple', 1563, 2.35);