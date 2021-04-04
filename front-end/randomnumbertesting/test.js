function randomString() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = '';
    for (var i = 8; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

