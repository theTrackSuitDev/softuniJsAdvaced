function townToJson(inputArray) {
    let tableArray = inputArray.slice();
    tableArray.shift();
    let jsonArray = [];

    class City {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    for (const data of tableArray) {
        let dataArray = data.split("|");
        dataArray.shift();
        dataArray.pop();
        dataArray = dataArray.map((a) => a.trim());

        let [town, latitude, longitude] = dataArray;
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let currentTown = new City(town, latitude, longitude);
        jsonArray.push(currentTown);
    }

    let result = JSON.stringify(jsonArray);
    console.log(result);
}
townToJson([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
]);
