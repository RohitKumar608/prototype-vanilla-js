// prototype subclass using the Object.create and setPrototype

function userCreator(name, score) {
  const user = Object.create(userFunctions)
  user.name = name
  user.score = score
  return user
}

const userFunctions = {
  increment: function () {
    this.score++
  },
  login: function () {
    console.log('Logged In')
  },
}

function paidUser(name, score, balance) {
  const user = userCreator(name, score)
  Object.setPrototypeOf(user, paidUserFunctions)
  user.accountBalance = balance
  return user
}

const paidUserFunctions = {
  increaseBalance: function () {
    this.accountBalance++
  },
}

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const publicUser = userCreator('Manish', 25)
const paidUser1 = paidUser('Rohit', 25, 50)

console.log(publicUser)

console.log(paidUser1)
