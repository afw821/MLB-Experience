// Imports express into our app and sets it up for use
const express = require('express');
//And mongoose
const mongoose = require('mongoose');
//and path
const path = require('path');



const app = express();

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 3050;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Middleware to serve our static files in the Public Directory
app.use(express.static(path.join(__dirname, 'public')));


if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
}else{


mongoose.connect('mongodb://localhost/MLBDB', { useNewUrlParser: true}); //name of database MLBDB
}
//requiring html and api routes
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

//Sets up the port to listen and console logs the port it's listening to 
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });
