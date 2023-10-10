const User = require('./userModule')

const user1 = new User(25, 3, "Henry", 28)
const user2 = new User(46, 90, "Samantha", 44)

console.log("User 1: ")
console.log(user1.addition(user1.num1, user1.num2))
console.log(user1.subtraction(user1.num1, user1.num2))
console.log(user1.multiply(user1.num1, user1.num2))
console.log(user1.divide(user1.num1, user1.num2))
console.log(user1.hello(user1.name, user1.age))
console.log(user1.stringed(user1.num1, user1.num2))


console.log("User 2: ")
console.log(user2.addition(user2.num1, user2.num2))
console.log(user2.subtraction(user2.num1, user2.num2))
console.log(user2.multiply(user2.num1, user2.num2))
console.log(user2.divide(user2.num1, user2.num2))
console.log(user2.hello(user2.name, user2.age))
console.log(user2.stringed(user2.num1, user2.num2))