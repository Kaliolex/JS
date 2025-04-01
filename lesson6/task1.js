function handleNum(num, handleEvenCb, handleOddCb) {
    let isOdd = num % 2 === 0
    if (isOdd == true) {
        handleOddCb(num)
    } else {
        handleEvenCb(num)
    }

}

function handleEven(number) {
    console.log(`Number ${number} is even`)
}

function handleOdd(number) {
    console.log(`Number ${number} is odd`)
}

handleNum(4, handleEven, handleOdd)
handleNum(5, handleEven, handleOdd)