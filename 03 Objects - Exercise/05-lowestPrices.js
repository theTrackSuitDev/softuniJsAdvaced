function lowestPrices(inputArray) {
    let productsObject = {};

    for (const command of inputArray) {
        let [town, product, price] = command.split(" | ");
        price = Number(price);

        if (!productsObject.hasOwnProperty(product)) {
            productsObject[product] = {};
            productsObject[product][town] = price;
            continue;
        }

        let [currentLowestPrice] = Object.values(productsObject[product]);

        if (price < currentLowestPrice) {
            productsObject[product] = {};
            productsObject[product][town] = price;
        }
    }

    let resultArray = Object.entries(productsObject);

    resultArray.forEach((element) => {
        let item = element[0];
        let [price] = Object.values(element[1]);
        let [city] = Object.keys(element[1]);
        console.log(`${item} -> ${price} (${city})`);
    });
}

lowestPrices([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
