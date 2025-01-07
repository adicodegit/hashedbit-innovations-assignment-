// Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function scopeExample() {
    if (true) {
        var varVariable = "I am a var variable";
        let letVariable = "I am a let variable";
        const constVariable = "I am a const variable";
        
        console.log(varVariable); 
        console.log(letVariable);
        console.log(constVariable);
    }
    
    console.log(varVariable); 
}

scopeExample();
console.log("");

// Create an array called fruits that contains five different fruit names. Write a function that returns the second fruit in the array.

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

function getSecondFruit() {
    return fruits[1];
}

console.log(getSecondFruit());
console.log("");

// Write a function that takes an array as an argument, adds a new element to the end of the array using push(), and then removes the last element using pop(). Return the modified array.

function modifyArray(arr) {
    arr.push("New Element");
    arr.pop();
    return arr;
}

const sampleArray = [1, 2, 3, 4, 5];
console.log(modifyArray(sampleArray));
console.log("");

// Create an array of numbers and write a function that uses the map() method to return a new array containing each number squared.

const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log(squareNumbers(numbers));
console.log("");

// Write a function that filters out all even numbers from an array of numbers using the filter() method. Return the new array of odd numbers

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterOddNumbers(mixedNumbers));
console.log("");

// Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};

function greetPerson(person) {
    console.log(`Hello, my name is ${person.name}, I am ${person.age} years old and I work as a ${person.occupation}.`);
}

greetPerson(person);
console.log("");

// Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}

const rectangle = {
    width: 10,
    height: 5
};

console.log(calculateArea(rectangle));
console.log("");

// Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

function getObjectKeys(obj) {
    return Object.keys(obj);
}

const sampleObject = {
    name: "Alice",
    age: 25,
    occupation: "Engineer",
    city: "Wonderland"
};

console.log(getObjectKeys(sampleObject));
console.log("");

// Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const object1 = {
    a: 1,
    b: 2
};

const object2 = {
    b: 3,
    c: 4
};

console.log(mergeObjects(object1, object2));
console.log("");

// Create an array of numbers and write a function that uses the reduce() method to calculate the sum of all the numbers in the array.

const numbersArray = [1, 2, 3, 4, 5];

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumArray(numbersArray));