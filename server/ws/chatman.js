module.exports.websocket = function(app) {
    app.io.route('ready', function(req) {
        req.session.name = req.data
        app.io.broadcast('join', req.data + ' joined the conversation')
    })
    app.io.route('talk', function(req) {
        app.io.broadcast('talk', req.session.name + ': ' + req.data)
    })
}