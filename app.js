var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.set('port', (process.env.PORT || 8080))

require('./server/controllers/hello.js').controller(app)

var server = app.listen(app.get('port'), function() {
    var host = server.address().address
    var port = server.address().port
})