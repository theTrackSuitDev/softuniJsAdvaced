function roadRadar(speed, areaString) {
    let limit = 0;

    switch (areaString) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
        default:
            break;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    }

    let difference = speed - limit;
    let status = "";

    if (difference < 21) {
        status = "speeding";
    } else if (difference < 41) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
}
roadRadar(200, 'motorway');