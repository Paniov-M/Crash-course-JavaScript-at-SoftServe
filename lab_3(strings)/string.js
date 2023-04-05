//1
let str = 'my name is "Maksym"?';

let count = 0


for (let i = 0; i<str.length; i++)
{
    if(str[i]== " ")
    {
        count++
    }
}

console.log("Count:", count)

//2

console.log(str.charAt(0).toUpperCase() + str.slice(1))

//3

const wordCount = str.trim().split(/\s+/).length;

console.log(wordCount)

//4

let words = str.split(" ");

let abbreviation = ""

for (let i = 0; i<words.length; i++)
{
     abbreviation +=words[i][0].toUpperCase();
}

console.log(abbreviation)

//5

let new_str = "";

k = 0

for (let i = 0; i<str.length; i--)
{
   new_str[k] = str[i];
   k++;
}


for (let i = 0; i<new_str.length; i++)
{
    if(new_str[i]== str[i])
    {
       с++
    }
}

if(c==str.length)
{
    console.log("Palindrom")
}


