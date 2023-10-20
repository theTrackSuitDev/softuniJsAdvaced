class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone (model, storage, price, condition) {
        if (
            model === "" ||
            !Number.isInteger(storage) ||
            storage < 0 ||
            price < 0 ||
            condition === ""
            ) {
            throw new Error("Invalid smartphone!");
        }

        let newPhone = {
            model,
            storage,
            price,
            condition
        }

        this.availableSmartphones.push(newPhone);
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone (model, desiredStorage) {
        let phoneIndex = this.availableSmartphones.findIndex(el => el.model === model);

        if (phoneIndex === -1) {
            throw new Error(`${model} was not found!`);
        } 
        
        let availableStorage = this.availableSmartphones[phoneIndex].storage;

        if (desiredStorage > availableStorage) {
            let difference = desiredStorage - availableStorage;

            if (difference <= 128) {
                this.availableSmartphones[phoneIndex].price *= 0.9;
            } else {
                this.availableSmartphones[phoneIndex].price *= 0.8;
            }
        }

        let soldPrice = this.availableSmartphones[phoneIndex].price;
        this.revenue += soldPrice;

        let soldPhone = {
            model,
            storage: availableStorage,
            soldPrice
        };

        this.soldSmartphones.push(soldPhone);
        this.availableSmartphones.splice(phoneIndex, 1);

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    upgradePhones () {
        let upgradedArray = [];

        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones.forEach(element => {
            element.storage *= 2;
            upgradedArray.push(`${element.model} / ${element.storage} GB / ${element.condition} condition / ${element.price.toFixed(2)}$`)
        });

        let result = `Upgraded Smartphones:\n${upgradedArray.join("\n")}`;
        return result.trim();
    }

    salesJournal (criteria) {
        if (criteria != "storage" && criteria != "model") {
            throw new Error("Invalid criteria!");
        }

        if (criteria === "storage") {
            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        }

        if (criteria === "model") {
            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`;

        result += `${this.soldSmartphones.length} smartphones sold:\n`;

        let soldArray = [];

        this.soldSmartphones.forEach(element => {
            soldArray.push(`${element.model} / ${element.storage} GB / ${element.soldPrice.toFixed(2)}$\n`);
        });

        result += soldArray.join("");

        return result.trim();
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 64, 1000, 'good'));
console.log(retailer.upgradePhones());
console.log(retailer.sellSmartphone('Samsung S20 Ultra1', 256));

// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect'));
// console.log(retailer.upgradePhones());
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.salesJournal('model'));