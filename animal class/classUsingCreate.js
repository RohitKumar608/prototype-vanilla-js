function AnimalCreator(name, weight, legs) {
  const animal = Object.create(animalFunctions)
  animal.name = name
  animal.weight = weight
  animal.legs = legs
  return animal
}

const animalFunctions = {
  printDetails: function () {
    console.log(`The ${this.name} has ${this.legs} legs`)
  },
  printWeight: function () {
    console.log(`${this.weight} Kg`)
  },
}

const dogFunctions = {
  bark: function () {
    console.log(`Dog barks ${this.bark}`)
  },
}

function Dog(name, weight, legs, bark) {
  const animal = AnimalCreator(name, weight, legs)
  Object.setPrototypeOf(animal, dogFunctions)
  animal.bark = bark
  return animal
}

Object.setPrototypeOf(dogFunctions, animalFunctions)

const dog1 = Dog('Tommy', 5, 4, 'bhubhu')
console.log(dog1)
