// a short example of how you can use classes in real code projects, alongside functions and all the other stuff


// Ride sharing service
class Car {
	constructor(seats) {
		this.availableSeats = seats
		this.riders = []
	}
	// add a rider to the riders array
	addRider(userId) {
		// check if there are any spaces left
		if(this.availableSeats > 0){
			this.riders.push(userId)
			console.log(userId + "was just picked up")
			this.availableSeats--
		} else {
			return false
		}
	}

	dropRider(userId) {
		var dropOff = this.riders.shift()
		console.log(dropOff + "was just dropped at their destination")
		this.availableSeats++
	}
}


// List of taxi cars
var taxiOne = new Car(4)
var taxiTwo = new Car(4)
var taxiThree = new Car(4)


// Riders Que
var ridersQue = [
	'2938749',
	'249723874',
	'2934',
	'23293847',
	'24y2i3234'
]

// Taxi Que
var taxiQue = [
	taxiOne
]

// taxiService function uses a list of users that need a ride, and adds them to available taxis
function taxiService(taxiList, ridersList ) {
	// run this addRider until the car is full
	taxiList[0].addRider(ridersList[0])
	// every time I add a rider to the car, I must also remove them from the riderList

	// remove the current taxi from the taxi list
}

taxiService(taxiQue, ridersQue)

console.log(taxiOne);
