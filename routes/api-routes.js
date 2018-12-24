const User = require('../models/User.js');

module.exports = function (app) {
//This route creates a user when they register
    app.post('/api/user', function (req,res) {
        User.create(req.body)
        .then(function (data){
            console.log('post' + data);
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        });
    });
//This get route gets a specific user by id
    app.get('/api/user/:id', function(req,res){
        User.find({_id: req.params.id})
        .then(function(data){
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        });
    });

    //This post route posts the user to the session when they login
    app.post('/api/session', function (req,res){
        const user = {
            username: req.body.username
        };

        let isMatchPh = false;
        

        User.findOne(user, function(err, userModel){
            // test a matching password
            userModel.comparePassword(req.body.password, function(err, isMatch) {
                if (err) throw err;
                console.log('api 39' + req.body.password, isMatch); // -&gt; Password123: true
                isMatchPh = isMatch;
            });
        })
        .then(function(data){
            console.log('api 44' + isMatchPh);
            if(isMatchPh){
                console.log('api 46' + data);
                res.json(data);
            }
            


            // console.log(isMatchPh);
            // if(isMatchPh){
            //     console.log('here');
            //     res.json(data);
            // }
        })
        .catch(function(err){
            res.json(err);
        });
    });

};