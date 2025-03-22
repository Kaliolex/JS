const { randomAge } = require('../lesson3/task2.js')

let dayNumber = randomAge(0, 8)

switch (dayNumber) {
    case 1: console.log('Понеділок'); break;
    case 2: console.log('Вівторок'); break;
    case 3: console.log('Середа, мої чуваки'); break;
    case 4: console.log('Четвер'); break;
    case 5: console.log('П`ятниця'); break;
    case 6: console.log('Субота'); break;
    case 7: console.log('Неділя'); break;
    default: console.log(`Incorrect value ${dayNumber}`)
}