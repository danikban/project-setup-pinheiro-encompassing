function randomString() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var charsLengthMinusOne = 35
    var result = ''
    for (var i = 8; i > 0; --i)
        result += chars[Math.round(Math.random() * (charsLengthMinusOne))]
    return result
}
console.log(randomString())