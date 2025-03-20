let age = 0
let isAdult = false

function randomAge(min, max) {

    let genAge = 0
    genAge = Math.floor(Math.random() * (max - min + 1) + min)
    return genAge
}

age = randomAge(10, 30)

isAdult = age >= 18 ? true : false

console.log(age, isAdult)