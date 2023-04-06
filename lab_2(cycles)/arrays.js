
//1

var array = new Array(20)

for(let i = 0; i<array.length-1 ; i++)
{
   array[i]=Math.round((Math.random()*100+1));
   console.log("Array","[",i,"]",':',array[i])
}

//2

function Compare(a, b) {
    return b - a
  }
  
array.sort(Compare)
console.log("Array:",array)

//3

for(let i = 0; i<array.length-1 ; i++)
{
   if(array[i]%7==0)
   {
    console.log(array[i],"kratne")
   }
}

//4 

array.fill(0, (array.length-1)/2, array.length-1)

console.log("Array with null:", array)

//5

array.splice(0,3);
console.log("Array:",array)

//6





