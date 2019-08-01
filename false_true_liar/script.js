function lieDetectorTest() {
    var lies = 0;
    var stolenDiamond = {};
    if (stolenDiamond) {
        console.log('You stole a diamond!');
        lies++;
    }
    var car = {
        keysInPocket: null
    };
    if (car.keysInPocket) {
        console.log('Ach! you stole a car too!');
        lies++;
    }
    if (car.emptyGasTank) {
        console.log('You were driving a stolen car');
        lies++;
    }
    var foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
        console.log('It is the evidence of crime!');
        lies++;
    }
    if (foundYouAtTheCrimeScene[0]) {
        console.log('We found the stolen diamond in your pocket!');
        lies++;
    }
    var yourName = ' ';
    if (yourName) {
        console.log('...and you lied about your personal details');
        lies++;
    }
    return lies;
}
var numberOfLies = lieDetectorTest();
console.log('You lied ' + numberOfLies + ' times!');
if (numberOfLies >= 3) {
    console.log('Guilty!');
}