const onlineStore = require("./onlineStore");
const expect = require("chai").expect;

describe("Tests onlineStore object", function () {
    describe("isProductAvailable(product, stockQuantity)", function () {
        it("Product not a string", function () {
            expect(function () {
                onlineStore.isProductAvailable(3, 3);
            }).to.throw("Invalid input.");
        });

        it("stockQuantity NaN", function () {
            expect(function () {
                onlineStore.isProductAvailable("Keyboard", "3");
            }).to.throw("Invalid input.");
        });

        it("Both invalid", function () {
            expect(function () {
                onlineStore.isProductAvailable(["Mouse"], undefined);
            }).to.throw("Invalid input.");
        });

        it("Valid input. Stock 0.", function () {
            let actualResult = onlineStore.isProductAvailable("Keyboard", 0);

            let expectedResult = `Sorry, Keyboard is currently out of stock.`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Valid input. Stock negative.", function () {
            let actualResult = onlineStore.isProductAvailable("Keyboard", -8);

            let expectedResult = `Sorry, Keyboard is currently out of stock.`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Valid input. Stock above 0.", function () {
            let actualResult = onlineStore.isProductAvailable("Keyboard", 8);

            let expectedResult = `Great! Keyboard is available for purchase.`;

            expect(actualResult).to.equal(expectedResult);
        });
    });

    describe("canAffordProduct(productPrice, accountBalance)", function () {
        it("Price NaN", function () {
            expect(function () {
                onlineStore.canAffordProduct("3", 3);
            }).to.throw("Invalid input.");
        });

        it("Balance NaN", function () {
            expect(function () {
                onlineStore.canAffordProduct(3, "3");
            }).to.throw("Invalid input.");
        });

        it("Both NaN", function () {
            expect(function () {
                onlineStore.canAffordProduct(true, undefined);
            }).to.throw("Invalid input.");
        });

        it("Valid input. Difference 0. Balance just enough", function () {
            let actualResult = onlineStore.canAffordProduct(2, 2);

            let expectedResult = `Product purchased. Your remaining balance is $0.`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Valid input. Both 0. Balance enough", function () {
            let actualResult = onlineStore.canAffordProduct(0, 0);

            let expectedResult = `Product purchased. Your remaining balance is $0.`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Valid input. Difference above 0. Balance enough", function () {
            let actualResult = onlineStore.canAffordProduct(10, 100);

            let expectedResult = `Product purchased. Your remaining balance is $90.`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Valid input. Difference below 0. Balance not enough", function () {
            let actualResult = onlineStore.canAffordProduct(100, 10);

            let expectedResult =
                "You don't have sufficient funds to buy this product.";

            expect(actualResult).to.equal(expectedResult);
        });
    });

    describe("getRecommendedProducts(productList, category)", function () {
        it("List not an array", function () {
            expect(function () {
                onlineStore.getRecommendedProducts({}, "gaming");
            }).to.throw("Invalid input.");
        });

        it("Category not a string", function () {
            expect(function () {
                onlineStore.getRecommendedProducts([], true);
            }).to.throw("Invalid input.");
        });

        it("Both invalid", function () {
            expect(function () {
                onlineStore.getRecommendedProducts("gaming", true);
            }).to.throw("Invalid input.");
        });

        it("Valid input. Available products", function () {
            let productList = [
                {name: "Camera", category: "Photography" },
                {name: "Lens", category: "Photography" },
                {name: "Keyboard", category: "Gaming" },
                {name: "Printer", category: "Office" },
                {name: "Beer", category: "Drinks" }
            ];

            let actualResult = onlineStore.getRecommendedProducts(productList, "Photography");

            let expectedResult = "Recommended products in the Photography category: Camera, Lens";

            expect(actualResult).to.equal(expectedResult);
        });
         
        it("Valid input. No available products", function () {
            let productList = [
                {name: "Camera", category: "Photography" },
                {name: "Lens", category: "Photography" },
                {name: "Keyboard", category: "Gaming" },
                {name: "Printer", category: "Office" },
                {name: "Beer", category: "Drinks" }
            ];

            let actualResult = onlineStore.getRecommendedProducts(productList, "Sport");

            let expectedResult = "Sorry, we currently have no recommended products in the Sport category.";

            expect(actualResult).to.equal(expectedResult);
        }); 
    });
});