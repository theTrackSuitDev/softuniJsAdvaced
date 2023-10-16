const PaymentPackage = require("./classes-12-paymentPackage");
const expect = require("chai").expect;

describe("Defines a class that contains information about a payment package", function () {
    it("Should initiate an instance with correct name when valid arguments are passed", function () {
        let testPackage = new PaymentPackage("Test", 200);

        let testPackageName = testPackage.name;
        let expectedName = "Test";

        expect(testPackageName).to.equal(expectedName);
    });

    it("Should initiate an instance with correct value when valid arguments are passed", function () {
        let testPackage = new PaymentPackage("Test", 200);

        let testPackageValue = testPackage.value;
        let expectedValue = 200;

        expect(testPackageValue).to.equal(expectedValue);
    });

    it("Should throw error for invalid name if empty string is passed as name", function () {
        expect(function () {
            new PaymentPackage("", 200);
        }).to.throw("Name must be a non-empty string");
    });

    it("Should throw an error if empty string is passed as name", function () {
        expect(function () {
            new PaymentPackage("", 200);
        }).to.throw(Error);
    });

    it("Should throw error for invalid value if negative number is passed as value", function () {
        expect(function () {
            new PaymentPackage("Test", -200);
        }).to.throw("Value must be a non-negative number");
    });

    it("Should throw an error if negative number is passed as value", function () {
        expect(function () {
            new PaymentPackage("Test", -200);
        }).to.throw(Error);
    });

    it("Should throw error for invalid name if non-string is passed as name", function () {
        expect(function () {
            new PaymentPackage(200, 200);
        }).to.throw("Name must be a non-empty string");
    });

    it("Should throw an error if non-string is passed as name", function () {
        expect(function () {
            new PaymentPackage(200, 200);
        }).to.throw(Error);
    });

    it("Should throw error for invalid value if non-number is passed as value", function () {
        expect(function () {
            new PaymentPackage("Test", "200");
        }).to.throw("Value must be a non-negative number");
    });

    it("Should throw an error if non-number is passed as value", function () {
        expect(function () {
            new PaymentPackage("Test", "200");
        }).to.throw(Error);
    });

    it("Should throw error for invalid name if empty string is set as name", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.name = "";
        }).to.throw("Name must be a non-empty string");
    });

    it("Should throw an error if empty string is set as name", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.name = "";
        }).to.throw(Error);
    });

    it("Should throw error for invalid value if negative number is set as value", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.value = -200;
        }).to.throw("Value must be a non-negative number");
    });

    it("Should throw an error if negative number is set as value", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.value = -200;
        }).to.throw(Error);
    });

    it("Should throw error for invalid name if non-string is set as name", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.name = 200;
        }).to.throw("Name must be a non-empty string");
    });

    it("Should throw an error if non-string is set as name", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.name = 200;
        }).to.throw(Error);
    });

    it("Should throw error for invalid value if non-number is set as value", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.value = '200';
        }).to.throw("Value must be a non-negative number");
    });

    it("Should throw an error if non-number is set as value", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.value = '200';
        }).to.throw(Error);
    });

    it("Should be able to get newly set name", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.name = "Test1";

        expect(testPackage._name).to.equal("Test1");
    });

    it("Should be able to get newly set value", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.value = 100;

        expect(testPackage._value).to.equal(100);
    });

    it("Should initiate default VAT at 20", function () {
        let testPackage = new PaymentPackage("Test", 200);
    
        expect(testPackage.VAT).to.equal(20);
    });

    it("Should initiate default active to true", function () {
        let testPackage = new PaymentPackage("Test", 200);
    
        expect(testPackage.active).to.equal(true);
    });

    it("Should throw error for invalid VAT if non-number is set as VAT", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.VAT = "200";
        }).to.throw("VAT must be a non-negative number");
    });

    it("Should throw an error if non-number is set as VAT", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.VAT = "200";
        }).to.throw(Error);
    });

    it("Should throw error for invalid VAT if negative number is set as VAT", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.VAT = -200;
        }).to.throw("VAT must be a non-negative number");
    });

    it("Should throw an error if negative number is set as VAT", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.VAT = -200;
        }).to.throw(Error);
    });

    it("Should be able to get newly set VAT", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.VAT = 100;

        expect(testPackage._VAT).to.equal(100);
    });

    it("Should throw error for invalid active if non-boolean(string) value is set as active", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.active = 'true';
        }).to.throw("Active status must be a boolean");
    });

    it("Should throw an error if non-boolean(string) value is set as active", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.active = 'true';
        }).to.throw(Error);
    });

    it("Should throw error for invalid active if non-boolean(null) value is set as active", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.active = null;
        }).to.throw("Active status must be a boolean");
    });

    it("Should throw an error if non-boolean(null) value is set as active", function () {
        let testPackage = new PaymentPackage("Test", 200);

        expect(function () {
            testPackage.active = null;
        }).to.throw(Error);
    });

    it("Should be able to get newly set active", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.active = false;

        expect(testPackage._active).to.equal(false);
    });

    it("Should be able to get string info with default values", function () {
        let testPackage = new PaymentPackage("Test", 200);
        let stringInfo = testPackage.toString();
        let expectedInfo = "Package: Test\n- Value (excl. VAT): 200\n- Value (VAT 20%): 240"

        expect(stringInfo).to.equal(expectedInfo);
    });

    it("Should be able to get string info with altered values", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.name = "Test1";
        testPackage.value = 100;
        testPackage.VAT = 100;
        testPackage.active = false;
        let stringInfo = testPackage.toString();
        let expectedInfo = "Package: Test1 (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 100%): 200"

        expect(stringInfo).to.equal(expectedInfo);
    });

    it("Should be able to get string info with altered name", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.name = "Test1";

        let stringInfo = testPackage.toString();
        let expectedInfo = "Package: Test1\n- Value (excl. VAT): 200\n- Value (VAT 20%): 240"

        expect(stringInfo).to.equal(expectedInfo);
    });

    it("Should be able to get string info with altered value", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.value = 100;

        let stringInfo = testPackage.toString();
        let expectedInfo = "Package: Test\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120"

        expect(stringInfo).to.equal(expectedInfo);
    });

    it("Should be able to get string info with altered VAT", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.VAT = 100;

        let stringInfo = testPackage.toString();
        let expectedInfo = "Package: Test\n- Value (excl. VAT): 200\n- Value (VAT 100%): 400"

        expect(stringInfo).to.equal(expectedInfo);
    });

    it("Should be able to get string info with altered active", function () {
        let testPackage = new PaymentPackage("Test", 200);
        testPackage.active = false;

        let stringInfo = testPackage.toString();
        let expectedInfo = "Package: Test (inactive)\n- Value (excl. VAT): 200\n- Value (VAT 20%): 240"

        expect(stringInfo).to.equal(expectedInfo);
    });

    // THE JUDGE TRAVESTY!!! 
    it("Should be able to get string info with 0 VAT and 0 value", function () {
        let testPackage = new PaymentPackage("Test", 0);
        testPackage.VAT = 0;

        let stringInfo = testPackage.toString();
        let expectedInfo = "Package: Test\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0"

        expect(stringInfo).to.equal(expectedInfo);
    });
});