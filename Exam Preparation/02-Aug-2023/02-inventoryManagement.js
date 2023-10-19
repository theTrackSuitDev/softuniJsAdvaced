class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        if (this.items.length === this.capacity) {
            throw new Error("The inventory is already full.");
        }

        let itemIndex = this.items.findIndex(
            (element) => element.itemName === itemName
        );

        if (itemIndex != -1) {
            this.items[itemIndex].quantity += quantity;
        } else {
            let newItem = {
                itemName,
                quantity,
            };

            this.items.push(newItem);
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        let itemIndex = this.items.findIndex(
            (element) => element.itemName === itemName
        );

        if (itemIndex === -1) {
            throw new Error(
                `The item ${itemName} is not available in the inventory.`
            );
        }

        let availableQuantity = this.items[itemIndex].quantity;
        if (availableQuantity < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        this.items[itemIndex].quantity -= quantity;
        if (this.items[itemIndex].quantity === 0) {
            this.items = this.items.filter(
                (element) => element.itemName != itemName
            );

            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }

        let itemIndex = this.items.findIndex(
            (element) => element.itemName === itemName
        );

        if (itemIndex != -1) {
            this.items[itemIndex].quantity += quantity;
        } else {
            let newItem = {
                itemName,
                quantity,
            };

            this.items.push(newItem);
        }

        if (this.outOfStock.includes(itemName)) {
            this.outOfStock = this.outOfStock.filter(
                (element) => element != itemName
            );
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let result = "Current Inventory:\n";
        this.items.forEach((element) => {
            result += `${element.itemName}: ${element.quantity}\n`;
        });

        if (this.outOfStock[0]) {
            result += `Out of Stock: ${this.outOfStock.join(", ")}`;
        }

        return result.trim();
    }
}

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.restockItem("Hammer", 5));
console.log(manager.getInventorySummary());