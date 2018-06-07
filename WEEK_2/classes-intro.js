class Engine {
	constructor(hp, oil) {
		this.horsepower = hp
		this.oilLevel = oil
		this.rpm = 0
	}
}

let v8 = new Engine(200, .80)
console.log(v8);
console.log(typeof(v8));

console.log("horsepower:", engine.horsepower)
console.log("oil:", engine.oilLevel)
console.log("rpm:", engine.rpm)

class Car {
	constructor(make, model, numdoors, wheels = 4) {
		this.make = make
		this.model = model
		this.doors = numdoors
		this.wheels = wheels
		this.automatic = true
		this.fuel = "gasoline"
		this.speed = 0
		this.status = "for sale"
	}

	accelerate() {
		return this.speed += 20
	}

	purchased() {
		if(this.status == "for sale") {
			this.status = "purchased"
		}
	}
}

// Instances of the car class
var myCar = new Car("Tesla", "Model S", 4, 4)
var myCar1 = new Car("Honda", "Accord")
// var myCar2 = new Car(4, "Ford", "Mustang")

// console.log(myCar, myCar1, myCar2 );

// myCar.accelerate()

// console.log(myCar1.speed);

class Ford extends Car {
	constructor(model, numdoors, wheels) {
		super("Ford", model, numdoors)
	}
}

let myFord = new Ford("Focus", 4)

console.log(myFord);

class Tesla extends Car {
	constructor(model, numdoors, batteryPack) {
		super("Tesla", model, numdoors)
		this.batteryPack = batteryPack
		this.fuel = "electricity"
	}
}

var myTesla = new Tesla("Roadster", 2)
console.log(myTesla);

myTesla.accelerate()

class Mustang extends Ford {
	constructor(model, numdoors, type) {
		super("Ford", model, numdoors)
			this.type = type
	}
}

// var myFord = new Ford("Mustang", 2)

// var myTesla = new Tesla("Roadster", 2)
