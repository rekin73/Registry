var express = require('express')
var app = express()
app.use(express.json())
var users = [];
var _ID = 0;
// respond with "hello world" when a GET request is made to the homepage
app.post('/addUser', function (req, res) {
    if (users.includes(req.body.login)) {
        //res.json({ a: 0 })
        res.json({ action: 'notok', a: req.body.login })
    }
    else {
        users.push(req.body.login)
        console.log(req.body.login)
        res.json({ action: 'ok', a: req.body.login, data: users })
    }


})

app.listen(3000, function () {
    console.log("start na porcie" + 3000);
})
