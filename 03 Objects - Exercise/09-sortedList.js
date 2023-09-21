function createSortedList() {
    let list = {
        numbers: [],
        add(number) {
            this.numbers.push(number);

            if (this.numbers.length > 1) {
                this.numbers.sort((a, b) => a - b);
            }
        },

        remove(index) {
            if (this.numbers[index] || this.numbers[index] == 0) {
                this.numbers.splice(index, 1);
            }
        },

        get(index) {
            if (this.numbers[index] || this.numbers[index] == 0) {
                return this.numbers[index];
            }
        },

        get size() {
            return this.numbers.length;
        },
    };

    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
