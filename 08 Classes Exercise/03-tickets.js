function tickets(infoArray, sortProperty) {
    let ticketsArray = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    infoArray.forEach((element) => {
        ticketsArray.push(new Ticket(...element.split("|")));
    });

    ticketsArray.sort((a, b) => {
        if (sortProperty === "price") {
            return a[sortProperty] - b[sortProperty];
        } else {
            return a[sortProperty].localeCompare(b[sortProperty]);
        }
    });

    return ticketsArray;
}

console.log(
    tickets(
        [
            "Philadelphia|94.20|available",
            "New York City|95.99|available",
            "New York City|95.99|sold",
            "Boston|126.20|departed",
        ],
        "price"
    )
);
