function checkOrder(available, ordered) {
    if (ordered > available) {
        console.log('Your order is too large, we don’t have enough goods.')
        return
    }

    if (ordered == 0) {
        console.log('Your order is empty')
        return
    }

    if (ordered == 0) {
        console.log('Your order is empty')
        return
    }

    console.log('Your order is accepted')
}

checkOrder(5, 10)
checkOrder(5, 0)
checkOrder(5, 5)