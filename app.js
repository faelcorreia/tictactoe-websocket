var express = require('express.io')
var bodyParser = require('body-parser')

var app = express()

app.use(express.cookieParser())
app.use(express.session({secret: 'secret'}))

app.http().io()
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.set('port', (process.env.PORT || 8080))

require('./server/controllers/hello.js').controller(app)
require('./server/ws/chatman.js').websocket(app)

var server = app.listen(app.get('port'), function() {
    var host = server.address().address
    var port = server.address().port
})