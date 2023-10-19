const recipeSelection = require("./recipeSelection");
const expect = require("chai").expect;

describe("Tests recipeSelection", function () {
    describe("Tests isTypeSuitable", function () {
        it("Type -> Meat, Restriction -> Vegetarian", function () {
            let actualResult = recipeSelection.isTypeSuitable(
                "Meat",
                "Vegetarian"
            );

            let expectedResult = "This recipe is not suitable for vegetarians";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Type -> Meat, Restriction -> Vegan", function () {
            let actualResult = recipeSelection.isTypeSuitable("Meat", "Vegan");

            let expectedResult = "This recipe is not suitable for vegans";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Type -> Dairy, Restriction -> Vegan", function () {
            let actualResult = recipeSelection.isTypeSuitable("Dairy", "Vegan");

            let expectedResult = "This recipe is not suitable for vegans";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Type -> Random string, Restriction -> Vegan", function () {
            let actualResult = recipeSelection.isTypeSuitable("dfgsg", "Vegan");

            let expectedResult =
                "This recipe is suitable for your dietary restriction";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Type -> Meat, Restriction -> Random string", function () {
            let actualResult = recipeSelection.isTypeSuitable("Meat", "fsdgsd");

            let expectedResult =
                "This recipe is suitable for your dietary restriction";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Type -> Random string, Restriction -> Random string", function () {
            let actualResult = recipeSelection.isTypeSuitable(
                "sfgfdsg",
                "fsdgsd"
            );

            let expectedResult =
                "This recipe is suitable for your dietary restriction";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Type -> Invalid (Number), Restriction -> Vegan", function () {
            expect(function () {
                recipeSelection.isTypeSuitable(3, "Vegan");
            }).to.throw("Invalid input");
        });

        it("Type -> Vegan, Restriction -> Invalid (Array)", function () {
            expect(function () {
                recipeSelection.isTypeSuitable("Vegan", ["Vegan"]);
            }).to.throw("Invalid input");
        });

        it("Type -> Invalid (boolean), Restriction -> Invalid (Array)", function () {
            expect(function () {
                recipeSelection.isTypeSuitable(true, [3, 4]);
            }).to.throw("Invalid input");
        });
    });

    describe("Tests isItAffordable", function () {
        it("Price > Budget", function () {
            let actualResult = recipeSelection.isItAffordable(200, 100);

            let expectedResult =
                "You don't have enough budget to afford this recipe";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Price < Budget", function () {
            let actualResult = recipeSelection.isItAffordable(10, 100);

            let expectedResult = `Recipe ingredients bought. You have 90$ left`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Price == Budget", function () {
            let actualResult = recipeSelection.isItAffordable(100, 100);

            let expectedResult = `Recipe ingredients bought. You have 0$ left`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Invalid price", function () {
            expect(function () {
                recipeSelection.isItAffordable("100", 100);
            }).to.throw("Invalid input");
        });

        it("Invalid budget", function () {
            expect(function () {
                recipeSelection.isItAffordable(100, null);
            }).to.throw("Invalid input");
        });

        it("Invalid price and budget", function () {
            expect(function () {
                recipeSelection.isItAffordable(undefined, null);
            }).to.throw("Invalid input");
        });
    });

    describe("Tests getRecipesByCategory", function () {
        it("Filter with valid inputs", function () {
            let recipes = [
                { title: "Spicy Tofu Stir-Fry", category: "Asian" },
                { title: "Spicy Chicken", category: "Junk" },
            ];

            let actualResult = recipeSelection.getRecipesByCategory(
                recipes,
                "Asian"
            );

            let expectedResult = ["Spicy Tofu Stir-Fry"];

            expect(actualResult).to.eql(expectedResult);
        });

        it("Invalid recipes", function () {
            expect(function () {
                recipeSelection.getRecipesByCategory(undefined, "Asian");
            }).to.throw("Invalid input");
        });

        it("Invalid category", function () {
            expect(function () {
                recipeSelection.getRecipesByCategory([], true);
            }).to.throw("Invalid input");
        });
    });
});
