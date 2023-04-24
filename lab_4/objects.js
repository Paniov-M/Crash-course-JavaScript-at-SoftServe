
//task 2

let car = {}

car["producer"] = "England"

car["model"] = "McLaren 570GT"

car["graduation year"] = 2017

car["average speed"] = 200

console.log(`Information: ${car["producer"]} - ${car["model"]} - ${car["graduation year"]} - ${car["average speed"]}`)

let vidstan = +prompt("Input vidstan:");

let time = vidstan/car["average speed"]

let breakTime = Math.floor(time / 4);

let travel_time = time + breakTime;

console.log("Travel hours:", travel_time)



