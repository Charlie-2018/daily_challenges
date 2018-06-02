// Duplicate Array

// Write a Javascript function called mergeArray that merges two arrays and removes all duplicate elements.

// mergeArray([1, 2, 3], [2, 30, 1]) should return [1, 2, 3, 30]. Order does not matter.

var arr1 = [1, 2, 3]
var otherArr = [2, 30, 1]

function mergeArray(array1, array2) {
	// empty array to hold the result 
	var dedupedArray = []
	
	// merge both arrays into one large array
	var mergedArray = array1.concat(array2)
	
	// run indexOf on the array values to check if a value exists elsewhere in the array
	for(let i = 0; i < mergedArray.length; i++) {
		let currentValue = mergedArray[i]
		// if value is unique
		if(dedupedArray.indexOf(currentValue) < 0) {
			dedupedArray.push(currentValue)
		} 
	}
	
	// return the new array
	return dedupedArray
}

mergeArray(arr1, otherArr)

//---------------------------------------------------- TEST CASES

var arr1 = [1, 2, 3]
var otherArr = [2, 30, 1]
var arr2 = [1, 1, 1, 1, 1, 1, 1] // tests reaction with multiple duplicates
var arr3 = [] // tests reaction with empty array
var arr4 = ["duck", 2, 3, 4, "duck"] // tests reaction with string
var arr5 = [7, 7.23, 8, 2] // tests for floats
var arr6 = [4, 5, true, false] // tests reaction with booleans

mergeArray(arr2, arr3) // ----works!!
mergeArray(arr1, arr4) // --- works!! Recognizes strings as a unique values
mergeArray(arr1, arr5) // --- works!! Recognizes floats as unique values
mergeArray(arr1, arr6) // --- works!! Recognizes booleans as unique values
