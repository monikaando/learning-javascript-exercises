function line() {
    let str = ''
    for (let i=0; i<10; i++) {
        str += '-';
    }
    console.log(str);
}

line();

let x = 20;
console.log("20 + 20 = ", x + 20);

line();

console.log("Hello!");
console.log("It's me, you're looking for!");

line();


function line(char, nr) {
    let str = '';
    for (let i=0; i<nr; i++) {
        str += char ;
    }
    console.log(str);
}

line("x", 5); //xxxxx
line(".", 10); //..........
line("=.", 3); //=.=.=.

function sum() {
    console.log(arguments);
}

sum(); //[] (zobacz dokładniej co wyszło w konsoli, bo wynik nie jest dokładnie taki)
sum(1,2,3,4); //[1,2,3,4]
sum("ala", "ma", "kota"); //["ala", "ma", "kota"]

function superSum() {
    let result = 0;
    for (let i=0; i<arguments.length; i++) {
        result += arguments[i];
    }
    console.log(result);
}

superSum(1, 2, 3, 4); //10

