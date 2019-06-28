var taxi = {
    make: "AutoCorp",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}
var worthALook = prequal(taxi);
if (worthALook) {
    console.log("This car looks nice: " + taxi.make + " " + taxi.model + ".");
} else {
    console.log("This " + taxi.make + " " + taxi.model + " you can ignore.");
}