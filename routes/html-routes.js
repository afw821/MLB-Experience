
const path = require('path');

module.exports = function(app) {
//This handles when a user visits a page.

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/search.html'));
});

};