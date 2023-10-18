(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str) === 0) {
            return `${this}`;
        } else {
            return `${str}${this}`;
        }
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return `${this}`;
        } else {
            return `${this}${str}`;
        }
    };

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    String.prototype.truncate = function (n) {
        let result = `${this}`;
        if (this.length < n) {
            return result;
        } else {
            let strArray = result.split(" ");
            if (strArray.length > 1) {
                while (result.length > n) {
                    strArray.pop();
                    result = strArray.join(" ");
                    result += "...";
                    strArray = result.split(" ");
                }

                return result;
            }

            if (n < 4) {
                result = "";
                result = result.padStart(n, ".");
                return result;
            }

            result = result.slice(0, n - 3);
            result += "...";
            return result;
        }
    };

    String.format = function (string, ...params) {
        let replacements = [...params];

        let index = 0;
        while (replacements[index]) {
            string = string.replace(`{${index}}`, replacements[index]);
            index++;
        }

        return string;
    };
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);
str = str.ensureStart("hello ");
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format("The {0} {1} fox", "quick", "brown");
console.log(str);
str = String.format("jumps {0} {1}", "dog");
console.log(str);