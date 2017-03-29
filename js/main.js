// var boolean = true
// 	console.log(boolean.length)

// var num = (1,2,3)
// 	console.log(num.length)

// var string = "hello world"
// 	console.log(string.length)

// var array = [ 1,true, "hi"]
// 	console.log(array.length)

// var object = {
// 	car: "honda",
// 	model: "s2000",
// 	year: "2007"
// }
// 	console.log(object.length)

// var array = [ 1,true, "hi"]
// 	console.log(array.reverse())

// var stringArray = ["pepperoni", "sausage", "ham"]
// 	console.log(stringArray.sort())
// 	stringArray.push("mushroom")
// 	console.log(stringArray)

// var numArray = [ 5,66,8768,425436 ]
// 	console.log(numArray.sort( function(a,b){return a-b} ))
// 	numArray.pop()
// 	console.log(numArray)

// function trans (name,cost,seats) {
// 	this.name= name
// 	this.cost = cost
// 	this.seats = seats
// }

// var bart = new trans('Bart', 5.80, 120)
// var muni = new trans('Muni',2.25, 50)
// var trolley = new trans('Trolley', 7, 25)

// console.log(bart)
// console.log(muni)
// console.log(trolley)

function restaurants (name,seats,bookedseats,seatsOpen) {
	this.name = name
	this.seats = seats
	this.bookedseats = bookedseats
	this.seatsAvailable = function() {
		return seats - bookedseats
	}
	this.seatsOpen = this.seatsAvailable()
}

var burrito = new restaurants("Kanye Asada", 20, 10)
var pizza = new restaurants("Project Pie", 20, 10)
var burger = new restaurants("Super Duper", 20, 10)



console.log(burrito, pizza, burger)




