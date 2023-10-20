const lottery = require("./Lottery");
const expect = require("chai").expect;

describe("Tests lottery object", function() {
    describe("Tests buyLotteryTicket method", function() {
        it("Invalid price", function() {
            expect(function () {
                lottery.buyLotteryTicket("1", 2, true);
            }).to.throw("Invalid input!");
        });
         
        it("Invalid count", function() {
            expect(function () {
                lottery.buyLotteryTicket(1, "2", true);
            }).to.throw("Invalid input!");
        });
         
        it("Invalid buy", function() {
            expect(function () {
                lottery.buyLotteryTicket(1, 2, 3);
            }).to.throw("Invalid input!");
        });

        it("Invalid All", function() {
            expect(function () {
                lottery.buyLotteryTicket([1], true, 3);
            }).to.throw("Invalid input!");
        });
         
        it("False buy", function() {
            expect(function () {
                lottery.buyLotteryTicket(1, 2, false);
            }).to.throw("Unable to buy lottery ticket!");
        });

        it("0 price", function() {
            expect(function () {
                lottery.buyLotteryTicket(0, 2, true);
            }).to.throw("Invalid input!");
        });
         
        it("Negative price", function() {
            expect(function () {
                lottery.buyLotteryTicket(-5, 2, true);
            }).to.throw("Invalid input!");
        });
         
        it("Negative count", function() {
            expect(function () {
                lottery.buyLotteryTicket(5, -2, true);
            }).to.throw("Invalid input!");
        });

        it("0 count", function() {
            expect(function () {
                lottery.buyLotteryTicket(5, 0, true);
            }).to.throw("Invalid input!");
        });

        it("Returns correct value with valid input and count = 1", function() {
            let result = lottery.buyLotteryTicket(5, 1, true);
            expect(result).to.equal("You bought 1 tickets for 5$.");
        });
         
        it("Returns correct value with valid input and count > 1", function() {
            let result = lottery.buyLotteryTicket(5, 2, true);
            expect(result).to.equal("You bought 2 tickets for 10$.");
        });     
    });

    describe("Tests checkTicket method", function() {
        it("ticketNumbers not an array", function() {
            expect(function () {
                lottery.checkTicket("1, 2, 3, 4, 5, 6", [1, 2, 3, 4, 5, 6]);
            }).to.throw("Invalid input!");
        });
         
        it("ticketNumbers shorter than 6", function() {
            expect(function () {
                lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);
            }).to.throw("Invalid input!");
        });
         
        it("luckyNumbers not an array", function() {
            expect(function () {
                lottery.checkTicket([1, 2, 3, 4, 5, 6], "1, 2, 3, 4, 5, 6");
            }).to.throw("Invalid input!");
        });
         
        it("luckyNumbers shorter than 6", function() {
            expect(function () {
                lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]);
            }).to.throw("Invalid input!");
        });
         
        it("Both Invalid", function() {
            expect(function () {
                lottery.checkTicket(["1, 2, 3, 4, 5, 6"], [1, 2, 3, 4, 5]);
            }).to.throw("Invalid input!");
        });
         
        it("6 winning numbers", function() {
            let result = lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
            expect(result).to.equal("You win the JACKPOT!!!");
        });
         
        it("5 winning numbers", function() {
            let result = lottery.checkTicket([1, 2, 3, 4, 5, 66], [1, 2, 3, 4, 5, 6]);
            expect(result).to.equal("Congratulations you win, check your reward!");
        });
         
        it("4 winning numbers", function() {
            let result = lottery.checkTicket([1, 2, 3, 4, 55, 66], [1, 2, 3, 4, 5, 6]);
            expect(result).to.equal("Congratulations you win, check your reward!");
        });
         
        it("3 winning numbers", function() {
            let result = lottery.checkTicket([1, 2, 3, 44, 55, 66], [1, 2, 3, 4, 5, 6]);
            expect(result).to.equal("Congratulations you win, check your reward!");
        });
     });

     describe("Tests secondChance method", function() {
        it("ticketID not a number", function() {
            expect(function () {
                lottery.secondChance("5", [1, 2, 3, 4, 5]);
            }).to.throw("Invalid input!");
        });
         
        it("secondChanceWinningIDs not an array", function() {
            expect(function () {
                lottery.secondChance(5, "[1, 2, 3, 4, 5]");
            }).to.throw("Invalid input!");
        });
         
        it("Both Invalid", function() {
            expect(function () {
                lottery.secondChance(true, "[1, 2, 3, 4, 5]");
            }).to.throw("Invalid input!");
        });
         
        it("Match", function() {
            let result = lottery.secondChance(5, [1, 2, 3, 4, 5]);
            expect(result).to.equal("You win our second chance prize!");
        });
         
        it("No match", function() {
            let result = lottery.secondChance(7, [1, 2, 3, 4, 5]);
            expect(result).to.equal("Sorry, your ticket didn't win!");
        });
     });
});