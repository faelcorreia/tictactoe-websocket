module.exports.controller = function(app) {
    app.get('/api', function(req, res) {
        res.sedStatus(200)
    })
}