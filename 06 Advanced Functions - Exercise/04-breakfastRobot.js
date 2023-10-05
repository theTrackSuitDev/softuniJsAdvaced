function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0 
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    let execution = function (command) {
        let [action, target, quantity] = command.split(' ');
        quantity = Number(quantity);

        switch (action) {
            case 'restock':
                ingredients[target] += quantity;
                return 'Success';

            case 'prepare':
                for (const ingredient in recipes[target]) {
                    if (recipes[target][ingredient] * quantity > ingredients[ingredient]) {
                        return `Error: not enough ${ingredient} in stock`;
                    }
                }

                for (const ingredient in recipes[target]) {
                    ingredients[ingredient] -= recipes[target][ingredient] * quantity;
                }
                return 'Success';

            case 'report':
                let result = [];
                for (const ingredient in ingredients) {
                    result.push(`${ingredient}=${ingredients[ingredient]}`)
                }
                return result.join(' ');
        
            default:
                break;
        }
    }

    return execution;
}