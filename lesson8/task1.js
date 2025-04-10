const calculator = {
    lastResult: null,
    operationsCount: 0,
    add: (a, b) => {
        calculator.lastResult = a + b
        calculator.operationsCount++
        return calculator.lastResult
    },
    subtract: (a, b) => {
        calculator.lastResult = a - b
        calculator.operationsCount++
        return calculator.lastResult
    },
    multiply: (a, b) => {
        calculator.lastResult = a * b
        calculator.operationsCount++
        return calculator.lastResult
    },
    divide: (a, b) => {
        if (b !== 0) {
            calculator.lastResult = a / b
            calculator.operationsCount++
            return calculator.lastResult
        } else {
            return "Помилка: ділення на нуль!"
        }
    },
    reset: () => {
        calculator.lastResult = null
        calculator.operationsCount = 0
    }
}

console.log(calculator?.add(4, 5))
console.log(calculator?.subtract(15, 5))
console.log(calculator?.multiply(3, 4))
console.log(calculator?.divide(7, 0))
console.log(calculator?.divide(50, 10))
console.log(`Last result: ${calculator?.lastResult}`)
console.log(`Operations: ${calculator?.operationsCount}`)
calculator?.reset()
console.log(`Last result: ${calculator?.lastResult}`)
console.log(`Operations: ${calculator?.operationsCount}`)