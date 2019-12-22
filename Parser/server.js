const express = require('express');
const app = express();
const path = require('path')
app.use('/js' , express.static(__dirname + "/js"));

app.get('/' , function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
});



app.get('/server.js', function (req, res) {
    res.send()
});
app.listen(3000);