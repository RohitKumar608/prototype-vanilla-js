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

user1.sayName()

function paidUserCreator(name, score, accountBalance) {
  userCreator.call(this, name, score)
  this.accountBalance = accountBalance
}

paidUserCreator.prototype = Object.create(userCreator.prototype)
paidUserCreator.prototype.incrementBalance = function () {
  this.accountBalance++
}

const paidUser1 = new paidUserCreator('David', 5, 50)

console.log(paidUser1)
