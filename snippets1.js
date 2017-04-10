/* ===== OO JS example ===== */

function Person(name, age, race) {
    this.name = name;
    this.age = age;
    this.race = race;
    this.description = function() {
        return this.name + ', is ' + this.age + ' years old. And is ' + this.race + '.'
    }
}

var james = new Person("Jimsee Bong", 32, "White");
var keely = new Person("Keely Chong", 30, "White");

console.log(james.description());
console.log(keely.description());

/* ===== Adding up numbers in array example ===== */

var sum = [1, 2, 3, 4, 5].reduce(add, 0);

function add(a, b) {
    return (a + b);
}

console.log(sum);

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
    this.teach = function(whateveryouwantinherewillhaveteachfedin) {
        console.log(this.name + " is now teaching " + whateveryouwantinherewillhaveteachfedinfromline132);
        console.log(this.name + " is " + this.age)
    }
}
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Jimsee Bong", 32);
him.teach("Swazzyness");

/* ===== Simple nested if ===== */

var a = 10
var b = 10
if (a === b) {
  if (a <= b) {
    alert("Hi!")
  }
}

