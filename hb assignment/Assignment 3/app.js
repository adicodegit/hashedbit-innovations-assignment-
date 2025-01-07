/* 
Q1) Create an array of states in india.
Remove all the names starting with vowels from the list. Use array.filter. 
*/

let states = ['Andhra Pradesh', 'Arunanchal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh'];

let statesWithoutVowels = states.filter(state => {
    return !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase());
});

console.log("States without vowels: ", statesWithoutVowels);
console.log("");

/*
Q2) let str = 'I love my India'
output expected = 'India my love I'
Write code for this.
*/

let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');

console.log("Reversed string: ", reversedStr);
console.log("");

/*
Q3) let string = 'INDIA'
output = 'INDONESIA'
Use array.splice 
*/

let string = 'INDIA';
let stringArray = string.split('');
stringArray.splice(3, 0, 'ONES');
let newString = stringArray.join('');

console.log("New string: ", newString);
console.log("");

/*
Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string. 
*/ 

let inputString = 'This is a string with minimum 20 characters';
let consonants = 0;
let vowels = 0;

for (let c of inputString) {
    if (['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase())) {
        vowels++;
    } else if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90 || c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) {
        consonants++;
    }
}

console.log("Number of consonants: ", consonants);
console.log("Number of vowels: ", vowels);
console.log("");

/*
Q5) Write a function to replace wrong word with correct word in any sentance.
Like this - correctfn(string, wrong, correct)
Use string.replace in function. 
*/

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = 'This is a sentance with wrong spelling';

sentence = correctfn(sentence, 'sentance', 'sentence');
sentence = correctfn(sentence, 'wrong', 'correct');

console.log("Corrected sentence: ", sentence);
console.log("");

/*
Q6) inputArr = [1,2,3,9,10,7,5,4,3]
answer = [9, 10, 7]
User array.filter and return numbers greater than 5. 
*/

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let answer = inputArr.filter(num => num > 5);

console.log("Numbers greater than 5: ", answer);
console.log("");

/*
Q7)
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];
Output = [
{ name: "Ram", average: 70 },
{ name: "Mohan", average: 80 },
{ name: "Sai", average: 70 },
{ name: "Hemang", average: 85 },
];

Use array.map and array.reduce. 
*/

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

let output = students.map(student => {
    let average = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
    return { name: student.name, average: average };
});

console.log("Output: ", output);
console.log("");

/*
Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6. 
*/

function repeatedSumOfDigits(num) {
    while (num > 9) {
        num = num.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    }
    return num;
}

let num = 456;
let result = repeatedSumOfDigits(num);

console.log("Result: ", result);
console.log("");

/*
Q9) Write a function to count the number of words in a paragraph. 
*/

function countWords(paragraph) {
    return paragraph.split(' ').length;
}

let paragraph = 'This is a paragraph with some words';
let wordCount = countWords(paragraph);

console.log("Word count: ", wordCount);
console.log("");

/*
Q10) Write a function to reverse a string.
Input - Hello
Outpur - olleH 
*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputStr = 'Hello';
reversedStr = reverseString(inputStr);

console.log("Reversed string: ", reversedStr);
console.log("");

/*
Q11)

Input

{
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
}
    
Output: -
{
    student1: {
        average: 44
    },
    student2: {
        average: 44
    },
    student3: {
        average: 44
    }
}

Write code to find average as mentioned above. Use array and object methods. 
*/

let studentsMarks = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
}


let studentsAverage = {};

for (let student in studentsMarks) {
    let totalMarks = Object.values(studentsMarks[student]).reduce((acc, mark) => acc + mark, 0);
    let average = totalMarks / Object.keys(studentsMarks[student]).length;
    studentsAverage[student] = { average: average };
}

console.log("Students average: ", studentsAverage);
console.log("");