function storeCatalogue(inputArray) {
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    let catalogueArray = [];

    for (const command of inputArray) {
        let [name, price] = command.split(" : ");
        let currentItem = new Product(name, price);
        catalogueArray.push(currentItem);
    }

    catalogueArray.sort((a, b) => a.name.localeCompare(b.name));

    let currentFirstLetter = catalogueArray[0].name[0];
    console.log(currentFirstLetter);

    for (const item of catalogueArray) {
        if (item.name[0] !== currentFirstLetter) {
            currentFirstLetter = item.name[0];
            console.log(currentFirstLetter);
        }

        console.log(`  ${item.name}: ${item.price}`);
    }
}
storeCatalogue([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10",
]);
