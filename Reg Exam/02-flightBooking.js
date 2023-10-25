class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let flightIndex = this.flights.findIndex(
            (el) => el.flightNumber === flightNumber
        );

        if (flightIndex != -1) {
            return `Flight ${flightNumber} to ${this.flights[flightIndex].destination} is already available.`;
        }

        let newFlight = {
            flightNumber,
            destination,
            departureTime,
            price,
        };

        this.flights.push(newFlight);
        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        let flightIndex = this.flights.findIndex(
            (el) => el.flightNumber === flightNumber
        );

        if (flightIndex === -1) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        let newBooking = {
            passengerName,
            flightNumber,
        };

        this.bookings.push(newBooking);
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        let bookingIndex = this.bookings.findIndex(
            (el) =>
                el.flightNumber === flightNumber &&
                el.passengerName === passengerName
        );

        if (bookingIndex === -1) {
            throw new Error(
                `Booking for passenger ${passengerName} on flight ${flightNumber} not found.`
            );
        }

        this.bookings.splice(bookingIndex, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error("No bookings have been made yet.");
        }

        if (criteria === "all") {
            let result = `All bookings(${this.bookingsCount}):\n`;
            let bookingsStrArray = [];
            this.bookings.forEach((element) => {
                bookingsStrArray.push(
                    `${element.passengerName} booked for flight ${element.flightNumber}.`
                );
            });

            return `${result}${bookingsStrArray.join("\n")}`;
        }

        if (criteria === "cheap") {
            let cheapFlights = this.flights.filter((el) => el.price <= 100);
            let cheapBookings = [];
            cheapFlights.forEach((flight) => {
                let number = flight.flightNumber;
                let matches = this.bookings.filter(
                    (el) => el.flightNumber === number
                );
                cheapBookings = cheapBookings.concat(matches);
            });

            if (cheapBookings.length === 0) {
                return "No cheap bookings found.";
            }

            let bookingsStrArray = [];
            cheapBookings.forEach((el) => {
                bookingsStrArray.push(
                    `${el.passengerName} booked for flight ${el.flightNumber}.`
                );
            });

            return `Cheap bookings:\n${bookingsStrArray.join("\n")}`;
        }

        if (criteria === "expensive") {
            let expensiveFlights = this.flights.filter((el) => el.price > 100);
            let expensiveBookings = [];
            expensiveFlights.forEach((flight) => {
                let number = flight.flightNumber;
                let matches = this.bookings.filter(
                    (el) => el.flightNumber === number
                );
                expensiveBookings = expensiveBookings.concat(matches);
            });

            if (expensiveBookings.length === 0) {
                return "No expensive bookings found.";
            }

            let bookingsStrArray = [];
            expensiveBookings.forEach((el) => {
                bookingsStrArray.push(
                    `${el.passengerName} booked for flight ${el.flightNumber}.`
                );
            });

            return `Expensive bookings:\n${bookingsStrArray.join("\n")}`;
        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
