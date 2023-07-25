function userCreator(name, score) {
  this.name = name
  this.score = score
}

userCreator.prototype.increment = function () {
  this.score += 1
}

userCreator.prototype.sayName = function () {
  console.log(`Hello I am ${this.name}`)
}

const user1 = new userCreator('Tim', 5)

// user1.sayName()

function paidUserCreator(name, score, accountBalance) {
  userCreator.call(this, name, score)
  this.accountBalance = accountBalance
}

/*  if we are using the Object.create and assigning to paidUserCreator.prototype i will override the previously prototype assigned to paidUserCreator
 because it will create a new object and replace the previous object with new one
*/
// paidUserCreator.prototype = Object.create(userCreator.prototype)

/*  if we are using the Object.setPrototypeOf and setting the prototype i will add the new prototype to paidUserCreator.prototype
 */
Object.setPrototypeOf(paidUserCreator.prototype, userCreator.prototype)

paidUserCreator.prototype.increaseBalance = function () {
  this.accountBalance++
}

const paidUser1 = new paidUserCreator('David', 5, 50)
// paidUser1.increaseBalance()
// paidUser1.sayName()

console.log(paidUser1)
