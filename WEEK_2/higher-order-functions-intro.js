
// ----------------------- OLD, LESS USEFULL VERSION
var numsArray = [1, 3, 8, 6, 0, 23, 8, 5]
// this function is not very flexible, it can only add the number two to each item in the array...
function addtwo(someArray) {
	let newArray = []
	for(let i =0; i < someArray.length; i++) {
		newArray.push(someArray[i] + 2)
	}
	console.log(newArray)
	return newArray
}
// We need to turn this function into something more flexible, more reusable. But how can we do that?

// ----------------------- NEW, MORE REUSEABLE VERSION

var numsArray = [1, 3, 8, 6, 0, 23, 8, 5]

// we break functionality into the smallest pieces possible, to give us the most flexibility when we chain them together to build programs.

// neither of these function is very complex:

function addtwo(value, index, copyArray) {
	return value + 2
}

function addSalesTax(value) {
	return value + (value*.08)
}

// editArray takes in two parameters, an array and another function
// because it takes in a function as a parameter, it is called a HIGHER ORDER FUNCTION
function editArray(someArray, action) {
	let newArray = []

	for(let i =0; i < someArray.length; i++) {
		let newValue = action(someArray[i])
		newArray.push()
	}
	console.log(newArray)
	return newArray
}

// by calling a small simple function inside of another function that loops over an array, we have more flexibility and a much more useful program over all

editArray(numsArray, addSalesTax)
editArray(numsArray, addtwo)

// editArray is a HIGHE ORDER FUNCTION because it takes in a function as a parameter
// addSalesTax and addtwo are CALLBACK functions because they are passed to a higher order function as a parameter
