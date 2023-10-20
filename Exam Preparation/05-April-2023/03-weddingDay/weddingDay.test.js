const weddingDay = require("./weddingDay");
const expect = require("chai").expect;

describe("Wedding day", function() {
    describe("pickVenue", function() {
        it('Capacity NaN', function() {
            expect(function () {
                weddingDay.pickVenue("3", 3, "Varna");
            }).to.throw("Invalid Information!");
        });

        it('pricePerGuest NaN', function() {
            expect(function () {
                weddingDay.pickVenue(3, "3", "Varna");
            }).to.throw("Invalid Information!");
        });

        it('location empty', function() {
            expect(function () {
                weddingDay.pickVenue(3, 3, "");
            }).to.throw("Invalid Information!");
        });

        it('location not Varna', function() {
            expect(function () {
                weddingDay.pickVenue(3, 3, "Sofia");
            }).to.throw("The location of this venue is not in the correct area!");
        });

        it("Requirements met even", function () {
            let actualResult = weddingDay.pickVenue(150, 120, "Varna");

            let expectedResult =
                "This venue meets the requirements, with capacity of 150 guests and 120$ cover.";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Requirements met excessive", function () {
            let actualResult = weddingDay.pickVenue(151, 119, "Varna");

            let expectedResult =
                "This venue meets the requirements, with capacity of 151 guests and 119$ cover.";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Requirements not met", function () {
            let actualResult = weddingDay.pickVenue(149, 121, "Varna");

            let expectedResult =
                "This venue does not meet your requirements!";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Capacity not met", function () {
            let actualResult = weddingDay.pickVenue(149, 120, "Varna");

            let expectedResult =
                "This venue does not meet your requirements!";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Price not met", function () {
            let actualResult = weddingDay.pickVenue(150, 121, "Varna");

            let expectedResult =
                "This venue does not meet your requirements!";

            expect(actualResult).to.equal(expectedResult);
        });
     });

    describe("otherSpendings (weddingDecoration, photography, discount)", function() {
        it("weddingDecoration not an Array", function() {
            expect(function () {
                weddingDay.otherSpendings(3, [1, 2, 3], true);
            }).to.throw("Invalid Information!");
        });

        it("photography not an Array", function() {
            expect(function () {
                weddingDay.otherSpendings([1, 2, 3], 3, true);
            }).to.throw("Invalid Information!");
        });

        it("discount not Boolean", function() {
            expect(function () {
                weddingDay.otherSpendings([1, 2, 3], [1, 2, 3], [1, 2, 3]);
            }).to.throw("Invalid Information!");
        });

        it("Flowers, No photo, No discount", function () {
            let actualResult = weddingDay.otherSpendings(["flowers"], [], false);

            let expectedResult =
                "You spend 500$ for wedding decoration and photography!";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Flowers and curtains No photo, No discount", function () {
            let actualResult = weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], [], false);

            let expectedResult =
                "You spend 900$ for wedding decoration and photography!";

            expect(actualResult).to.equal(expectedResult);
        });

        it("Flowers and curtains No photo, With discount", function () {
            let actualResult = weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], [], true);

            let expectedResult =
                `You spend ${900*0.85}$ for wedding decoration and photography with 15% discount!`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Flowers and curtains Photo and Video, With discount", function () {
            let actualResult = weddingDay.otherSpendings(["flowers", "Fabric drapes and curtains"], ["pictures", "video"], true);

            let expectedResult =
                `You spend ${2900*0.85}$ for wedding decoration and photography with 15% discount!`;

            expect(actualResult).to.equal(expectedResult);
        });

        it("Flowers x2 and curtains Photo and Video, With discount", function () {
            let actualResult = weddingDay.otherSpendings(["flowers", "flowers", "Fabric drapes and curtains"], ["pictures", "video"], true);

            let expectedResult =
                `You spend ${3400*0.85}$ for wedding decoration and photography with 15% discount!`;

            expect(actualResult).to.equal(expectedResult);
        });
     });

    describe("tableDistribution (guests, tables)", function() {
        it("guests is NaN", function() {
            expect(function () {
                weddingDay.tableDistribution("3" , 3);
            }).to.throw("Invalid Information!");
        });

        it("guests is negative", function() {
            expect(function () {
                weddingDay.tableDistribution(-3 , 3);
            }).to.throw("Invalid Information!");
        });
         
        it("tables is negative", function() {
            expect(function () {
                weddingDay.tableDistribution(3 , -3);
            }).to.throw("Invalid Information!");
        });
         
        it("tables is NaN", function() {
            expect(function () {
                weddingDay.tableDistribution(3 , "-3");
            }).to.throw("Invalid Information!");
        });

        it("Less than 6 per table", function () {
            let actualResult = weddingDay.tableDistribution(3 , 3);

            let expectedResult =
                "There is only 1 people on every table, you can join some tables.";

            expect(actualResult).to.equal(expectedResult);
        });

        it("6 per table", function () {
            let actualResult = weddingDay.tableDistribution(18 , 3);

            let expectedResult =
                "You have 3 tables with 6 guests on table.";

            expect(actualResult).to.equal(expectedResult);
        });
         
        it("More than 6 per table", function () {
            let actualResult = weddingDay.tableDistribution(30 , 3);

            let expectedResult =
                "You have 3 tables with 10 guests on table.";

            expect(actualResult).to.equal(expectedResult);
        });
         
     });

});