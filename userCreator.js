const userFunctionStore = {
  increment: function () {
    this.score++
  },
  login: function () {
    console.log('Logged In')
  },
}

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore)
  newUser.score = score
  newUser.name = name
  return newUser
}

const will = userCreator('Will', 3)
const tim = userCreator('Tim', 5)
// will.increment()
console.log(will)
