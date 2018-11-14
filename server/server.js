var express = require('express')
var app = express()
app.use(express.json())
var users = [];
var _ID = 0;
// respond with "hello world" when a GET request is made to the homepage

app.post('/addUser', function (req, res) {
    console.log(users.find(x => x.login === '45'))
    if (users.find(x => x.login === req.body.login)!=undefined) {
        //res.json({ a: 0 })
        res.json({ action: 'userExists', a: req.body.login })
    }
    else if(req.body.login==''||req.body.password==""){
        res.json({ action: 'emptyCredts', a: req.body.login })
    }
    else {
        let obj = req.body;
        obj.key = _ID.toString();
        _ID += 1;
        users.push(obj)
        console.log(obj)
        res.json({ action: 'ok', data: users })
    }


})

app.listen(3000, function () {
    console.log("start na porcie" + 3000);
})
