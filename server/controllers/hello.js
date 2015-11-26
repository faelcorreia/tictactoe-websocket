module.exports.controller = function(app) {
    app.get('/api/hello', function(req, res) {
        res.send({
            data: 'Hello, world!'
        })
    })
}