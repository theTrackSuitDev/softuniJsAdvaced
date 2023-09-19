function townPopulation(input) {
    let inputArray = input.slice();
    let cities = {};

    while (inputArray.length > 0) {
        let [town, population] = inputArray.shift().split(" <-> ");
        population = Number(population);

        if (cities[town]) {
            cities[town] += population;
            continue;
        }

        cities[town] = population;
    }

    for (const town in cities) {
        console.log(`${town} : ${cities[town]}`);
    }

}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);