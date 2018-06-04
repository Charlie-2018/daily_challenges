// create some arrays to test the function with
var a = [1, 2, 3];
var b = [2, 30, 1];
var c = [2, 4, 5, 6, 7, 0]
var d = [2, 4, 5, 6, 7, 0]

// function mergeArray takes in four arrays as arguments, returns one array with no duplicate values
function mergeArray(...arrays) {
	// the spread operator used above (...) allows us to pass in a varying number of parameters to the function

    // create empty array to hold new deduped array
    var deduped = [];

    // combine all arrays passed to the function into one large array
    var combinedArray = arrays.shift().concat(...arrays)
	// console.log(combinedArray);

    // iterate over the combined array, adding each unique value to deduped array
    for (var index=0; index < combinedArray.length; index++) {
        if(deduped.includes(combinedArray[index]) == false) {
            // add the value to dedupe
            deduped.push(combinedArray[index])
        } else {
            // console log the duplicate value
            console.log("duplicate found:" + combinedArray[index])
        }
    }
}

// mergeArray(a, b)
//
// mergeArray(d, c)

mergeArray(a, b, d, c)
