/* ===== Adding up numbers in array example ===== */

var sum = [1, 2, 3, 4, 5].reduce(add, 0);

function add(a, b) {
    return (a + b);
}

console.log(sum);

/* ===== Adding up numbers example ===== */

function sum(a, b) {
  var c = a + b;
  alert("The sum is " + c)
}
sum(5, 100);

/* ===== Concatinating strings ===== */

var part1 = "The medium ";
var part2 = "is the message.";
displayIdiom(part1, part2);
function displayIdiom(a, b) {
  alert(a + b);
}

/* ===== Simple if/else with conditions ===== */

var a = "James";
var b = "Waller";
var c = prompt("First name?");
var d = prompt("Last name?");
if (a === c && b === d) {
  alert(a + " " + b);
}
else {
  alert(c + " " + d + " doesn't match " + a + " " + b);
}

/* ===== OO JS example ===== */

function Person(name, age, nationality) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
    this.description = function() {
        return this.name + ', is ' + this.age + ' years old. And is ' + this.nationality + '.'
    }
}

var james = new Person("Jimsee Bong", 32, "British");
var keely = new Person("Keely Chong", 30, "British");

console.log(james.description());
console.log(keely.description());

/* ===== Switch statement example ===== */

for (var i = 1; i <= 100; i++) {
    switch (true) {
        case i % 3 === 0 && i % 5 === 0:
            console.log("applepen");
            break;
        case i % 3 === 0:
            console.log("apple");
            break
        case i % 5 === 0:
            console.log("pen");
            break
        default:
            console.log(i);
    }
}

/* ===== For loop FizzBuzz  ===== */

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

/* ===== Binding a function to an objuect  ===== */

var person = {
    name: "John"
};

function printName() {
    console.log(this.name);
}

// This creates a variable that binds the function print name to person and is called below.
var boundPrintName = printName.bind(person);
boundPrintName();

// Calls printName with person as the context using the call method
printName.call(person);

/* ===== Inheritence  ===== */

var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}

var Country = function() {};
Country.prototype = new Person();

Country.prototype.home = function(country) {
    console.log(this.name + " comes from " + country);
}

var me = new Student();
var james = new Country();

me.initialize("John", 25);
me.learn("Inheritance");
james.initialize("James", 32);
james.home("England");

/* ===== Inheritence 2 ===== */

var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

var Teacher = function() {
	// Use this.teach as we are already inside Teacher
    this.teach = function(whateveryouwantinherewillhaveteachfedinfromline162) {
        console.log(this.name + " is now teaching " + whateveryouwantinherewillhaveteachfedinfromline162);
        console.log(this.name + " is " + this.age)
    }
}
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Jimsee Bong", 32);
him.teach("Swazzyness");

/* ===== Simple nested if statements ===== */

var a = 10
var b = 10
if (a === b) {
  if (a <= b) {
    alert("Hi!")
  }
}

/* ===== Simple nested if statements 2 ===== */

var a = "James";
var b = "Waller";
var c = prompt("First name?");
var d = prompt("Last name?")
if (a === c) {
  if (b === d) {
    alert("You are " + a + " " + b);
  }
}
else {
  alert(c + " " + d + ". I don't know you!")
}

/* ===== Inserting into Array ===== */

var emptyArray = [];
emptyArray.push("James", "Keely");
console.log(emptyArray);

// Not empty array

var array = ["James"];
array.unshift("Keely");
alert(array);

/* ===== Inserting into array with loop then lopp original array (no point just wanted to see if it worked) ===== */

var emptyArray = [];

for (var i = 1; i <= 100; i++) {
    emptyArray.push(i);
}

for (var emptyArray = 1; emptyArray <= 100; emptyArray++) {
    if (emptyArray % 3 === 0 && emptyArray % 5 === 0) {
        console.log("FizzBuzz");
    } else if (emptyArray % 3 === 0) {
        console.log("Fizz");
    } else if (emptyArray % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(emptyArray);
    }
}

/* ===== Remove first element from Array ===== */

var array = ["James", "Keely"];
array.shift();
console.log(array);

/* ===== Remove section element from Array ===== */

var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3);
console.log(pets);

/* ===== Remove section element from Array and into new array ===== */

var pets = ["dog", "cat", "ox", "duck", "frog"];
newPets = pets.slice(3, 5);
console.log(newPets);

/* ===== Insert "L" into the array between "M" and "XL". ===== */

var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");
console.log(sizes);

/* ===== Simple array iteration. ===== */

var numArray = [5, 10];
for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] === numArray[i]) {  
    alert(numArray[i]);
  }
}

// or.........

var numArray = [5, 10];
for (var i = 0; i < numArray.length; i++) {
  if ((numArray[i] === 5) || (numArray[i] === 10)) {  
    alert(numArray[i]);
  }
}

/* ===== Break out of loop once match is found. ===== */

var myArray = [3, 4];
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] === myArray[i]) {
    alert(myArray[i]);
  }
  break;
}

/* ===== Basic nested for loop. ===== */

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    x = i + j;
    console.log(x);
  }
}

// with all combos of two arrays........

var array1 = ["Jimsee", "Keely"];
var array2 = ["Waller", "Hands", "Bong", "Chong"];
var combos = [];
var count = 0;
for (var i = 0; i < array1.length; i++) {
  for (var j = 0; j < array2.length; j++) {
    combos[count] = array1[i] + " " + array2[j];
    count++;
  }
}
console.log(combos);

/* ===== Change state of array. ===== */

myArray = myArray.toLowerCase();
myArray = myArray.toUpperCase();

/* ===== Slicing a variable. ===== */

var x = "James Waller";
var y = x.slice(3, 9);
console.log(y);

/* ===== Finding the character number of the firt instance of a word. ===== */

var x = "Hello my name is James";
console.log(x.indexOf("James"));

/* ===== Finding the character number of the firt instance of a word. ===== */

var x = "Hello my name is James, James is my name.";
console.log(x.lastIndexOf("James"));

/* ===== Finding a specific characher of a string. ===== */

var x = "My name is James!";
console.log(x.charAt(11));

/* ===== Finding the last characher of a string. ===== */

var x = "My name is James!";
console.log(x.charAt(x.length - 1));

/* ===== Replacing. ===== */

// Once......

var x = "My name is James......"
console.log(x);
x = x.replace("My name is James......", "......and I am swazzy!");
console.log(x);

// All instances......

var x = "My name is James...... James is swazyy."
console.log(x);
x = x.replace(/James/g, "Keely!");
console.log(x);

/* ===== Rounding numbers. ===== */

var w = Math.round(1.567);
var x = Math.round(1.467);
var y = Math.ceil(1.567);
var z = Math.floor(1.567);
console.log(w,x,y,z);

/* ===== Generate random number 1-6. ===== */

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
console.log(numberOfStars);

/* ===== Gets rid of decimal point. ===== */

var x = "10.5";
alert(parseInt(x) + parseInt(x));

/* ===== Keeps decimal point. ===== */

var x = "10.99";
alert(parseFloat(x) + parseFloat(x));

/* ===== Convert string to number. ===== */

var x = "10"
alert(Number(x));

/* ===== Convert number to string. ===== */

var x = "10"
alert(x.toString() + x.toString());

/* ===== Convert number to fixed amount of decimal places. ===== */

var x = 10.55678;
alert(x.toFixed(2));

/* ===== Get the Day. ===== */

var y = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var x = new Date();
x = x.getDay();
alert(y[x]);

// Other methods......

getDay()    
getFullYear()   
getHours()
getMilliseconds()  
getMinutes() 
getMonth() 
getSeconds()  
getTime()  

// examples ......

var d = new Date();
document.getElementById("myDiv").innerHTML = d.getTime();

var x = new Date;
alert(x.getFullYear());

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
var now = new Date();
var monthNow = now.getMonth();
alert(months[monthNow]);

/* ===== Set the date, day, time, etc. Methods. ===== */

var d = new Date();
d.setFullYear(2001);
console.log(d);

var d = new Date();
d.setMonth(11);
console.log(d);

var d = new Date();
d.setDate(15);
console.log(d);

var d = new Date();
d.setHours(13);
console.log(d);

var d = new Date();
d.setMinutes(05);
console.log(d);

var d = new Date();
d.setSeconds(55);
console.log(d);

var d = new Date();
d.setMilliseconds(867);
console.log(d);

// example......

var now = new Date();
var nowYear = now.getFullYear(); 
now.setFullYear(nowYear - 100);
console.log(now);

/* ===== Returning data from a function. ===== */

function x(a, b, c) {
    return a * b * c;
}

var y = x(100, 2, 5); 
// Values are input to x in the paremeters of the function call and stored in the y variable

console.log(y);

