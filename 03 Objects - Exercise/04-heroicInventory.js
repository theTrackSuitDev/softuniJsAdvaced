function heroicInventory(inputArray) {
    let heroesArray = [];

    class Hero {
        constructor(name, level) {
            this.name = name;
            this.level = Number(level);
            this.items = [];
        }
    }

    while (inputArray.length > 0) {
        let heroCommand = inputArray.shift().split(" / ");
        let [name, level] = heroCommand;
        let currentHero = new Hero(name, level);
        if (heroCommand[2]) {
            let items = heroCommand[2].split(", ");
            items.forEach(element => {
                currentHero.items.push(element)
            });
        }

        heroesArray.push(currentHero);
    }

    return JSON.stringify(heroesArray);
}
console.log(heroicInventory(['Jake / 1000']));