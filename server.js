const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) =>{
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err){
      console.log('Unable to append to server log');
    }
  });
  next();
});

app.use((req, res, next) => {
  //we dont call next() so the rest would not execute
  res.render('maintenance.hbs');
});
//if this statement is over the maintenance then it would still exec
app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear', () =>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (request, response) => {
  // response.send('<h1>Hello Express!</h1>');
  response.render('home.hbs', {
    pageTitle: 'Home Page',
    welcome: 'Hello World'
  })
});

app.get('/about', (request, response) =>{
  response.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (request, response) =>{
  response.send({
    error: 'Unable to handle request'
  })
})

app.listen(3000);
