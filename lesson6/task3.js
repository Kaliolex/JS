function createCounter() {
    let count = 0
    return function () {
        return ++count
    }
}

const counter = createCounter()

for (let i = 0; i < 6; i++) {
    console.log(counter())
}