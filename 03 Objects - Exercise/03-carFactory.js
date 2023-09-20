function carFactory(orderObject) {
    let resultObject = {
        model: orderObject.model,
        engine: {},
        carriage: {},
        wheels: []
    }

    if (orderObject.power <= 90) {
        resultObject.engine.power = 90;
        resultObject.engine.volume = 1800;
    }

    if (orderObject.power > 90) {
        resultObject.engine.power = 120;
        resultObject.engine.volume = 2400;
    }

    if (orderObject.power > 120) {
        resultObject.engine.power = 200;
        resultObject.engine.volume = 3500;
    }

    resultObject.carriage.type = orderObject.carriage;
    resultObject.carriage.color = orderObject.color;

    let wheel = orderObject.wheelsize;
    if (wheel % 2 === 0) {
        wheel--;
    }
    
    for (let i = 0; i < 4; i++) {
        resultObject.wheels[i] = wheel;  
    }

    return resultObject;
}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));