class CUser1 {
  name = 'Mohit'
  age = 29
  decrement() {
    return this.age--
  }
}
class CUser2 extends CUser1 {
  name = 'Rohit'
  age = 28
  increment() {
    this.age++
    return this.age++
  }
}

const newUser = new CUser2()
console.log(newUser)

// under hood the work

function User1() {
  this.name = 'Rohit'
  this.age = 28
}

function User2() {
  this.name = 'Mohit'
  this.age = 29
}

User1.prototype.increment = function () {
  this.age++
}

User2.prototype.decrement = function () {
  // console.log(this.__proto__, this.prototype)
  this.age--
}
User2.sayhello = 'function () {}'

User1.prototype = Object.assign(new User2(), User1.prototype)

const newUser1 = new User1()
console.log(newUser1)

// for (const key in newUser1) {
//   if (newUser1.hasOwnProperty(key)) {
//     console.log(newUser1[key], 'hasOwn')
//   } else {
//     console.log(newUser1[key], '--not--has---own--')
//   }
// }
