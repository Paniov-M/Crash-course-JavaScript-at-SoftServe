// browser dialogs 

alert("Some alert message");

//task 1

const year = +prompt("Enter your year of birth:");

console.log(` Your age: ${2023 - year}`);

//task 2

const circle_radius = +prompt("Enter circle radius:");

console.log(`Area: ${3.14 * circle_radius * circle_radius}`);

//task 3

const distance = +prompt("Enter distance From A to B :");

const time = +prompt("Enter time to arrive :");

console.log(`Speed must be: ${distance/time}`);

//task 4

const dollar = +prompt("Dollar :");

console.log(`Euro: ${dollar * 0.94}`);

//task 5

const count = +prompt("Enter how many gigabytes :");

gigabyte = count * 1024

i = 0

while (gigabyte>=820)
{
    gigabyte = gigabyte - 820
    i++
}

console.log(`${i} files is available for saving`);