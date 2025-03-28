function generatePassword(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let password = ''
    for (let i = 0; i < length; i++) {
        let randomValue = Math.floor(Math.random() * (chars.length))
        password += chars[randomValue]
    }
    return password
}

console.log(generatePassword(8))