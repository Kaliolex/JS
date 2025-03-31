function countDown(num) {
    if (num > -1) {
        console.log(num)
        countDown(num - 1)
    }
}

countDown(5)