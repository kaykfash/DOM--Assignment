# DOM--Assignment

Explain First class and Second-class citizen

First class citizenship in JavaScript means “being able to do what everyone else can do”. JavaScript functions are often referred to as first class citizen because they are objects, 
Function inherits from the Object prototype and they can be assigned key: value.
Second class citizen  does not exist in JavaScript. 


https://kaykfash.github.io/DOM--Assignment/



Explain Infinite Loops with Example
An infinite loop in JavaScript as the name suggest is a loop that will keep running forever as the terminating condition is never reached. An Infinite loop occurs when the condition f the while statement is set to true.

Example of an Infinite Loops:
let childAge= 10;
    
    while(childAge > 18) {
        console.log('Not Eligible')
    };


        Explain For loops with Example
For Loops: this creates a loop that is executed as long as the condition is true, and it loops through a block of code. We pass a set of three instructions in the for loop and they include: the initialization, the condition, and the increment part.
Example of For Loop:

// program to display text 10 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}



Explain For each loop with Example:
The forEach() loop is used to loop through an array but it uses a function.
The syntax of the forEach() method is:
array.forEach(function(currentValue, index, arr))

Here,
function(currentValue, index, arr) - a function to be run for each element of an array
currentValue - the value of an array
index (optional) - the index of the current element
arr (optional) - the array of the current elements


Example:
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}



Explain For of loops with example:

The for...of loop statement creates a loop iterating over iterable objects, it invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

Example:
const carBrands = ['Toyota', 'Volvo', 'Cadillac'];

for (const element of carBrands) {
  console.log(element);
}



Use the ForEach loop to loop through an array of objects and log the second property of each object to the console

let studentsDetails= [{name:john,class:ss1,age:17},
{name:Sara,class:ss2,age:16},
{name:Jack,class:ss3,age:17}
]

// using forEach
students.forEach(myFunction
()=>{console.log(myFunction.class)

function myFunction(item) {

    console.log(item[1]);
}

