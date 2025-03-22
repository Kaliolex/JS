const { randomAge } = require('../lesson3/task2.js')

let hour = randomAge(0, 23)

console.log(hour)

function greetingsDetector(time) {
    if (time >= 0 && time <= 5) {
        console.log('Good night!')
    }
    else {
        if (time >= 6 && time <= 11) {
            console.log('Good morning!')
        }
        else {
            if (time >= 12 && time <= 17) {
                console.log('Good day!')
            }
            else {
                console.log('Good evening!')
            }
        }
    }
}

greetingsDetector(hour)