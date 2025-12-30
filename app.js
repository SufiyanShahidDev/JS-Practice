

// there are many possible and correct variable names
let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

let str = "text";
let strStr = String(str);
console.log(`${typeof str} : ${str}`); // -> string : text
console.log(`${typeof strStr} : ${strStr}`); // -> string : text

let nr = 42;
let strNr = String(nr);
console.log(`${typeof nr} : ${nr}`); // -> number : 42
console.log(`${typeof strNr} : ${strNr}`); // -> string : 42

let bl = true;
let strBl = String(bl);
console.log(`${typeof bl} : ${bl}`); // -> boolean : true
console.log(`${typeof strBl} : ${strBl}`); // -> string : true

let bnr = 123n;
let strBnr = String(bnr);
console.log(`${typeof bnr} : ${bnr}`); // -> bigint : 123
console.log(`${typeof strBnr} : ${strBnr}`); // -> string : 123

let un = undefined;
let strUn = String(un);
console.log(`${typeof un} : ${un}`); // -> undefined : undefined
console.log(`${typeof strUn} : ${strUn}`); // -> string : undefined

let n = null;
let strN = String(n);
console.log(`${typeof n} : ${n}`); // -> object : null
console.log(`${typeof strN} : ${strN}`); // -> string : null


let b1 = true + 100;
// let b2 = true + 100n; // -> error!
let b3 = true + "100";
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200";
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]


let books = [{
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460
},
{
    title: "Programming JavaScript Applications",
    author: "Eric Elliot",
    pages: 254
},
{
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352
}
];



let newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};
books.push(newBook);
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
console.log(books[3].title);
let selectedBooks = books.slice(-2);

books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);

let sum = books[0].pages + books[1].pages + books[2].pages;
console.log(`pages: ${sum}`);

let number = prompt("Enter a random number");
if (number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}

let number = prompt("Enter a random number");
let message = (number > 90 && number < 110) ? "Bingo!" : "Miss";
alert(message);

let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);

let n = 0;
while (n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}

let isOver = false;
let counter = 1;
while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}

let condition = false;
while (condition) {
    console.log("A while loop iteration."); // never executed
}
do {
    console.log("A do ... while loop iteration."); // executed once
} while (condition);

let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];
for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}

let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}

let movies = [];
while (true) {
    let title = prompt("Enter movie title");
    let rating = prompt("Enter movie rating (imdb)");

    if (title === null || rating === null) {
        break
    } else {
        movies.push({
            title: title,
            rating: Number(rating)
        });
    }
}

console.log("All with ratings under 7:");
for (movie of movies) {
    if (movie.rating < 7) {
        console.log(`${movie.title} (${movie.rating})`);
    }
}

console.log("All with ratings over 7:");
for (movie of movies) {
    if (movie.rating >= 7) {
        console.log(`${movie.title} (${movie.rating})`);
        break;
    }
}

while (true) {
    let firstNumber = prompt("Enter first number");
    let secondNumber = prompt("Enter second number");
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") {
        break;
    }

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "*":
                result = firstNumber * secondNumber;
                break;
            case "/":
                result = firstNumber / secondNumber;
                break;
            default:
                result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
}


let temperatures;
let meanTemp;
function getMeanTemp() {
    let sum = 0;
    let result;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    result = sum / temperatures.length;
    return result;
}
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
meanTemp = getMeanTemp();
console.log(`mean: ${meanTemp}`);


function getMeanTemp(temperatures) {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}
let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log(`mean: ${getMeanTemp(day1)}`); // -> mean:
16.666666666666668
let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
console.log(`mean: ${getMeanTemp(day2)}`); // -> mean:
18.083333333333332


let inner = function () {
    console.log('inner 1');
}
let outer = function (callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    setTimeout(function () {
        clearInterval(timerId);
    }, 5500);
}
console.log('test 1');
outer(inner);
console.log('test 2');

function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];
let showContact = function (contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function (contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function (contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

console.log(showContact)
console.log(showAllContacts)
console.log(addNewContact)