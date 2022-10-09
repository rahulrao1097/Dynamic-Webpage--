//cookie
const cookieParser = require('cookie-parser');
// use the express library
const express = require('express');

// create a new server application
const app = express();

// Define the port we will listen on
// (it will attempt to read an environment global
// first, that is for when this is used on the real
// world wide web).
const port = process.env.PORT || 3000;

let nextVisitorId = 1;
var startingdate=new Date()
// The main page of our website
app.get('/', (req, res) => {
  res.cookie('visitorId', nextVisitorId);
  res.cookie('visited', Date.now().toString());
  console.log(req.headers.cookie)
  res.render('welcome', {
    name: req.query.name || "World",
    Date: req.query.name || new Date().toLocaleString(),
    Visit: req.query.name || nextVisitorId,
    time: req.query.name || Math.round((new Date().getTime() - startingdate.getTime())/1000),
  });
  startingdate=new Date()
});// Start listening for network connections
app.listen(port);
app.use(express.static('public'));
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(cookieParser());

// Printout for readability
console.log("Server Started!");
