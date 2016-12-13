const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  // response.send('<h1>Hello Express!</h1>');
  response.render('home.hbs', {
    pageTitle: 'About Page',
    welcome: 'Hello World',
    currentYear: new Date().getFullYear()
  })
});

app.get('/about', (request, response) =>{
  response.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (request, response) =>{
  response.send({
    error: 'Unable to handle request'
  })
})

app.listen(3000);
