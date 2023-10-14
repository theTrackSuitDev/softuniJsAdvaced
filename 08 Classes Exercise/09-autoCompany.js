function autoCompany(carsArray) {
    let carsLedger = new Map();

    carsArray.forEach((car) => {
        let [brand, model, quantity] = car.split(" | ");
        quantity = Number(quantity);

        if (!carsLedger.has(brand)) {
            let brandModels = new Map();
            brandModels.set(model, quantity);
            carsLedger.set(brand, brandModels);

        } else {
            if (!carsLedger.get(brand).has(model)) {
                carsLedger.get(brand).set(model, quantity);
            } else {
                let newQuantity = carsLedger.get(brand).get(model) + quantity;
                carsLedger.get(brand).set(model, newQuantity);
            }
        }
    });

    for (const [brand, models] of carsLedger) {
        console.log(brand);
        for (const [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}
autoCompany([
    "Audi | Q7 | 1000",
    "Audi | Q6 | 100",
    "BMW | X5 | 1000",
    "BMW | X6 | 100",
    "Citroen | C4 | 123",
    "Volga | GAZ-24 | 1000000",
    "Lada | Niva | 1000000",
    "Lada | Jigula | 1000000",
    "Citroen | C4 | 22",
    "Citroen | C5 | 10",
]);
