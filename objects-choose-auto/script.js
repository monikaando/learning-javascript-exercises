var taxi = {
    make: "AutoCorp",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};
var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "jasnobrązowy",
    passengers: 5,
    convertible: false,
    mileage: 12892
};
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "szaroniebieski",
    passengers: 2,
    convertible: false,
    mileage: 88000
};
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "czerwony",
    passengers: 2,
    convertible: false,
    mileage: 1021
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
var worthALook = prequal(cadi);
if (worthALook) {
    console.log("This car looks nice: " + cadi.make + " " + cadi.model + ".");
} else {
    console.log("This " + cadi.make + " " + cadi.model + " you can ignore.");
}
var worthALook = prequal(fiat);
if (worthALook) {
    console.log("This car looks nice: " + fiat.make + " " + fiat.model + ".");
} else {
    console.log("This " + fiat.make + " " + fiat.model + " you can ignore.");
}
var worthALook = prequal(chevy);
if (worthALook) {
    console.log("This car looks nice: " + chevy.make + " " + chevy.model + ".");
} else {
    console.log("This " + chevy.make + " " + chevy.model + " you can ignore.");
}