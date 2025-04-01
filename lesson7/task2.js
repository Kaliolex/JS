const numbers = [1, 11, 5, 3, -18, 0, 6, 3, 0, 9, 4, 0, 8, 2, 0]

let arrSum = numbers.reduce(function (sum, element){
    return sum + element
}, 0)

console.log(arrSum)