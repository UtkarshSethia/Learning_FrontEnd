// Hello World
console.log("hello world");
console.log("This is Utkarsh");
console.log(1);
console.log(6);

//variable Declaration and naming convention
if (true) {
  let variable = "Var";
  console.log("Variable Name: ", variable); // Block scoped
}

const data = "This is it"; //A constant variable is a variable that doesn't change its value
console.log(data);

if (true) {
  var name1 = "Ram"; //Global Scoped
}
console.log(name1);

//Operators

let a = 2;
let b = 4;
//1. Arithmetic Operators
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a ** b);
console.log(b % a);
b++;
a--;
console.log(b);
console.log(a);

//2. Logical Operator
let c = true;
let d = false;
if (c && d) {
  console.log("both are true");
}
if (c || d) {
  console.log("one of them is true");
}
console.log(!c);

//3. type of

console.log(typeof 3);
console.log(typeof "abc");
console.log(typeof true);

// data types

//1.strings

let stringName = "strings";
console.log("string1" + "string2" + stringName); //concatenation
let myName = "Utkarsh";
console.log(`${myName} is learning  today`);

//2.Numbers : int and float
console.log(2 + 2);
let x = 1.2;
let y = 2.35;

console.log(x + y);
console.log(2 + "ABC"); //Adding a number and letters together will cause JavaScript to concatenate or join the values together.

//3. boolean
let on = true;
let off = false;
if (on) {
  console.log("On is ", on);
}

// difference b/w undefined and null
let first_name;
console.log(first_name); // undefined
first_name = null;
console.log(first_name);

//Type coercion
console.log(1 + "1");

// Javascript Arrays
let birds = ["Owl", "Eagle", "Parrot", "Falcon"];
//index:       0      1       2           3
console.log(birds);
birds[2] = "Vulture";
console.log(birds);
birds.push("Crow");
console.log(birds);
birds.pop();
console.log(birds);

let nums = [1, 2, 3, 4, 5, 6];
nums.shift();
console.log(nums);
console.log(nums.indexOf(3));
console.log(nums.includes(3));
console.log(nums.length);

//loops
nums = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < nums.length; i++) {
  console.log("Array Numbers using For LOOP: ", nums[i]);
}
let counter = 0;
while (counter < nums.length) {
  console.log("Array Numbers using while LOOP:", nums[counter]);
  counter++;
}

// switch cases

let age = 25;
switch (age) {
  case 10:
    console.log("Age is 10");
    break;
  case 20:
    console.log("Age is 20");
    break;
  case 30:
    console.log("Age is 30");
    break;
  default:
    console.log("Age is neither 10 or 20");
}

//Functions in Javascript

function HelloWorld() {
  //defining a function
  // function body here
  console.log("This is a Function ,Hello!");
}

HelloWorld(); //calling function
let MyName = "Utkarsh";
//parameters
function displayName(name) {
  console.log("This is ", name);
}
displayName(MyName);

let weather = "rainy";
function greet(weather, name = "Utkarsh") {
  console.log(`Hello, ${name}!`);
  console.log(`It's ${weather} today, right?`);
}

greet("sunny");

//return stament

function sum(a, b) {
  return a + b;
}

let result = sum(3, 4);
console.log(result);

function checkAge(age) {
  if (age > 18) {
    return "You may get a car license";
  }
  return "You may not get a car license yet";
}

console.log(checkAge(20));
console.log(checkAge(15));

//Arrow Functions
const ArrowFunction = (myName) => {
  console.log(`My name is ${myName}`);
};
ArrowFunction("Utkarsh Sethiya");

const double = (num) => console.log(num * 2);
let num = 5;
double(num);

//Objects in JavaScript

let Employee = {
  name: "Raj",
  age: 25,
  location: "New Delhi",
  details: {
    role: "Software Engineer",
    joined: 2022,
  },
};
console.log(Employee);
console.log(Employee.name);
console.log(Employee.age);
console.log(Employee.location);
console.log(Employee.details.role);
console.log(Employee.details.joined);

Employee["name"] = "Utkarsh";
console.log(Employee.name);

delete Employee.age;
console.log(Employee);

// Array of Objects in JavaScript
let EmpData = [
  {
    name: "Raj",
    age: 25,
    location: "New Delhi",
    details: {
      role: "Software Engineer",
      joined: 2022,
    },
  },
  {
    name: "Varun",
    age: 24,
    location: "Mumbai",
    details: {
      role: "Junior Software Engineer",
      joined: 2023,
    },
  },
  {
    name: "Amit",
    age: 30,
    location: "Indore",
    details: {
      role: "Product Manager",
      joined: 2016,
    },
  },
  {
    name: "Priya",
    age: 29,
    location: "Hyderabad",
    details: {
      role: "UX Designer",
      joined: 2020,
    },
  },
];

// using map function to iterate through an array
EmpData.map((list) => {
  console.log(list);
});
