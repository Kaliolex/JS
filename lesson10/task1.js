function delayedLog(message, delay) {

    const sendMessage = new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${message}`)
        }, delay);
    })

    return sendMessage.then(result => console.log(result))
}

delayedLog("Привіт, світ!", 2000)