function juices(juiceArray) {
    let juiceQuantities = {};
    let bottlesOfJuice = new Map;
    
    juiceArray.forEach(juice => {
        let [type, quantity] = juice.split(' => ');
        quantity = Number(quantity);

        if (juiceQuantities.hasOwnProperty(type)) {
            juiceQuantities[type] += quantity;
        } else {
            juiceQuantities[type] = quantity;
        }

        if (juiceQuantities[type] >= 1000) {
            let bottles = Math.floor(juiceQuantities[type] / 1000);
            juiceQuantities[type] -= bottles * 1000;
            if (bottlesOfJuice.has(type)) {
                let newCount = bottlesOfJuice.get(type) + bottles;
                bottlesOfJuice.set(type, newCount);
            } else {
                bottlesOfJuice.set(type, bottles);
            }
        }    
    });
    
    for (const [key, value] of bottlesOfJuice) {
        console.log(`${key} => ${value}`);
    }
}
juices(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);