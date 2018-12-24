
const path = require('path');
const passport = require('passport');
const LocalStrategy = require ('passport-local').Strategy;
const bcrypt = require('bcryptjs');

module.exports = function(app) {
//This handles when a user visits a page.

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/search.html'));
});

app.get('/success', (req, res) => res.send("Welcome "+req.query.username+"!!"));

app.get('/error', (req, res) => res.send("error logging in"));

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success?username='+req.user.username);
  });
  /* Login logic for passport.authenticate*/
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if(user !== null) {
                const isPasswordCorrect = bcrypt.compareSync(password, user.password);
                if(isPasswordCorrect) {
                    console.log("Username and password correct!");
                    return done(null, user);
                } else {
                    console.log("Password incorrect!");
                    return done(null, false);
                }
           } else {
               console.log("Username does not exist!");
               return done(null, false);
           }
       });
    }
));

};