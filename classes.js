class UserCreator {
  constructor(name, score) {
    this.name = name
    this.score = score
  }
  sayName() {
    console.log(`Hello I am ${this.name}`)
  }
  increment() {
    this.score++
  }
}

const user1 = new UserCreator('Tim', 5)
// console.log(user1)

class PaidUserCreator extends UserCreator {
  constructor(name, score, accountBalance) {
    super(name, score)
    this.accountBalance = accountBalance
  }
  increaseBalance() {
    this.accountBalance++
  }
}

const paidUser1 = new PaidUserCreator('David', 5, 50)

console.log(paidUser1)
