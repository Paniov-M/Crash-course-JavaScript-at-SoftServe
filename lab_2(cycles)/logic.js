
// task_1(1)

const number = +prompt("Enter your number:");

switch (number){
    case 1: console.log("!"); break;
    case 2: console.log("@"); break;
    case 3: console.log("#"); break;
    case 4: console.log("$"); break;
    case 5: console.log("%"); break;
    case 6: console.log("^"); break;
    case 7: console.log("&"); break;
    case 8: console.log("*"); break;
    case 9: console.log("("); break;
}


// task_1(2)

const year = +prompt("Input year:");

if(year % 4 == 0 && year % 100 != 0)
    console.log("Yes, intercalary");
else if(year % 400 == 0)
    console.log("Yes, intercalary");
else console.log("No")


// task_1(2)

let start_point = +prompt("Input start:");
let end_point = +prompt("Input end:");

let sum = 0

while (start_point<end_point)
{
    sum += start_point 
    start_point +=1
}

console.log("Suma:", sum)


// task_2(2)

let num = +prompt("Input num:");

let count = 0

while(num>0)
{
    num = parseInt(num/10)
    count = count + 1
}

console.log("Count:", count)


// task_3(2)

var lst = []

for (let i =0; i<5; i++ )
{
    let num = +prompt("Input num:",i);
    lst.push(num)
}

console.log("List = ", lst)

let dod = 0
let vid =0
let nul = 0
let par = 0 
let nepar = 0

let end = lst.length;

for(let i=0; i<end ;i++)
{
    if(lst[i]>0) 
       dod+=1
    else if(lst[i]<0) 
       vid+=1
    else if(lst[i]==0) 
       nul+=1
    else if(lst[i]%2==0) 
       par+=1
    else if(lst[i]%2!=0) 
       nepar+=1    
}

console.log("Dodatni: ", dod)
console.log("Videmni: ", vid)
console.log("Null: ", nul)
console.log("Parni: ", par)
console.log("Neparni: ", nepar)


// task_4(2)

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentIndex = 0;
let input = "";

do {
const currentDay = daysOfWeek[currentIndex];
input = prompt(`${currentDay}. Do you want to see the next day?`);
currentIndex = (currentIndex + 1) % 7;
} while (input !== null);


