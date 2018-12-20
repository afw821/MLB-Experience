// Imports express into our app and sets it up for use
const express = require('express');
const mongoose = require('mongoose');



const app = express();

// Defines a PORT for the server to listen for requests
const PORT = process.env.PORT || 3028;

// Sets up our server to parse our request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
// -----------------
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
}else{


mongoose.connect('mongodb://localhost/MLBDB', { useNewUrlParser: true}); //name of database kudositeDB
}

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);



// Syncs our database first


  // Starts our server on the predefined PORT
  // Only starts if the db successfully syncs
  app.listen(PORT, function(){
    console.log(`App is now listening on PORT ${PORT}`)
  });
