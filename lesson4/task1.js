const { randomAge } = require('../lesson3/task2.js')

let number = randomAge(1, 100)

if (number % 2 == 0) {
    console.log(`Число ${number} є парним`)
}
else {
    console.log(`Число ${number} є непарним`)
}