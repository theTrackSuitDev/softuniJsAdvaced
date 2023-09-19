function cityTaxes(name, population, treasury) {
    let resultObject = {
        name, 
        population, 
        treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += Math.floor(this.population * this.taxRate);
        },

        applyGrowth: function (percentage) {
            let multiplier = 1 + percentage / 100;
            this.population = Math.floor(this.population * multiplier);
        },

        applyRecession: function (percentage) {
            let multiplier = 1 - percentage / 100;
            this.treasury = Math.round(this.treasury * multiplier);
        }

    };

    return resultObject;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
