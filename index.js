var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use('/', require('./routes/home'))

var port = process.env.Port || 3000
app.listen(port, function () {
  console.log('server on! http://localhost:' + port)
})
