function time(req, res, next) {
    const date = new Date();
    const day = date.getDay(); 
    const hours = date.getHours(); r

    
    if ((day > 5 || day < 1) || (hours < 9 || hours > 17)) {
        res.send("<h1>Website is closed</h1>");
    } else {
        next(); 
    }
}

module.exports = time
