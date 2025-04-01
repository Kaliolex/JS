const numbers = [1, -1, 0, 3, -8, 0, 6, -3, 0, 9, -4, 0, -8, -2, 0]
let positive = 0
let negative = 0
let zeros = 0

for (const num of numbers) {
    if (num > 0) {
        positive++
    } else if (num < 0) {
        negative++
    } else {
        zeros++
    }
}

console.log(`Positive Numbers: ${positive}`)
console.log(`Negative Numbers: ${negative}`)
console.log(`0 Numbers: ${zeros}`)