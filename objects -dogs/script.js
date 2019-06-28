var dog = {
    name: "Rex",
    weight: 20.2,
    age: 4,
    breed: "labrador",
    activity: "fetching ball"
};

var bark;
if (dog.weight > 20) {
    bark = "Wof Wof";
} else {
    bark = "wof wof";
}

var speak = dog.name + " bark " + bark + " when it is time for " + dog.activity;
console.log(speak);