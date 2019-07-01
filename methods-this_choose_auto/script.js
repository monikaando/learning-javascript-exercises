var taxi = {
    make: "AutoCorp",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " +
                this.model + " makes sound: brum wrrrr!");
        } else {
            alert("First, you should start the engine.");
        }
    }
};
var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "jasnobrązowy",
    passengers: 5,
    convertible: false,
    mileage: 12892,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " +
                this.model + " makes sound: brum wrrrr!");
        } else {
            alert("First, you should start the engine.");
        }
    }
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "szaroniebieski",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " +
                this.model + " makes sound: brum wrrrr!");
        } else {
            alert("First, you should start the engine.");
        }
    }
};
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "czerwony",
    passengers: 2,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function() {
        this.started = true;
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if (this.started) {
            alert(this.make + " " +
                this.model + " makes sound: brum wrrrr!");
        } else {
            alert("First, you should start the engine.");
        }
    }
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

taxi.start();
taxi.drive();
taxi.stop();

cadi.drive();
cadi.start();
cadi.stop();

fiat.start();
fiat.stop();
fiat.drive();

chevy.start();
chevy.drive();
chevy.stop();