const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  // response.send('<h1>Hello Express!</h1>');
  response.send({
    name: 'Jenny',
    likes: ['Coding', 'Traveling']
  })
});

app.get('/about', (request, response) =>{
  response.send('About Page');
});

app.get('/bad', (request, response) =>{
  response.send({
    error: 'Unable to handle request'
  })
})

app.listen(3000);
