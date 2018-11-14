var express = require('express')
var app = express()
app.use(express.json())
var users = [];
var _ID = 0;
// respond with "hello world" when a GET request is made to the homepage
let include = function (array, obj) {
    return array.forEach(element => {
        if (element.login == obj.login)
            return true;
        else
            return false;
    });
}
app.post('/addUser', function (req, res) {
    if (include(users, req.body)) {
        //res.json({ a: 0 })
        res.json({ action: 'notok', a: req.body.login })
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
