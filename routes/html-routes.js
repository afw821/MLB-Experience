
const path = require('path');

module.exports = function(app) {
//This handles when a user visits a page.

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
//default home route
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

};