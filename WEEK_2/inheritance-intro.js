// class animal is the parent class

class Animal {
	constructor(sound, age){
		this.sound = sound,
		this.kingdom = "animalia"
		this.age = age
	}

	makeSound(){
		console.log(this.sound)
	}

	findBirthYear(){
		var year = (new Date()).getFullYear()
		console.log(year)
		return year - this.age
	}
}

// class Amphibian inherits from Animal
// all attributes and methods belonging to Animal are accessible to Amphibian
// class Amphibian is a child of the Animal class

class Amphibian extends Animal {
	constructor(sound){
		super(sound)
		this.family = "amphibian"
	}
}

// class Frog inherits from Amphibian, which inherits from Animal
// all attributes belonging to both Amphibian and Animal are accessible to Frog
// class Frog is a child of the Amphibian class

class Frog extends Amphibian {
	constructor(sound, colors, kingdom){
		super()
		this.colors = colors
		this.species = species
		this.kingdom = kingdom
		this.sound = sound
	}
}

// Now we can create an instance of the Frog class

var arrowHeadFrog = new Frog("ribbit")
