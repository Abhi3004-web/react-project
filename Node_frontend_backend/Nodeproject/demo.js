const express = require('express')
const app = express();

app.use((req, res, next) => {
    console.log("middleware");
    next();
})

app.get('/', function (req, res) {
    res.send('Hello World fgtgtgrtg')
})

app.get('/profile', function (req, res, next) {
    //res.send('Hello World is not my profile')
    console.log(req.body);
    return next(new Error("galat hai y"));
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000)