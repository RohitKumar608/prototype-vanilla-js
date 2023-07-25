function AnimalCreator(name, weight, legs) {
  this.name = name
  this.weight = weight
  this.legs = legs
}

AnimalCreator.prototype.printDetails = function () {
  console.log(`The ${this.name} has ${this.legs} legs`)
}

AnimalCreator.prototype.printWeight = function () {
  console.log(`${this.weight} Kg`)
}

function Dog(name, weight, legs, bark) {
  AnimalCreator.call(this, name, weight, legs)
  this.bark = bark
}

Dog.prototype = Object.create(AnimalCreator.prototype)

// Object.setPrototypeOf(Dog.prototype, AnimalCreator.prototype)

Dog.prototype.bark = function () {
  console.log(`Dog barks ${this.bark}`)
}

const dog1 = new Dog('Tommy', 5, 4, 'bhubhu')
console.log(dog1)
console.log(dog1.bark)
