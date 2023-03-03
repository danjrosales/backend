const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.send('Hello there from express server')
});

app.get('/hello_get', function(request, response){
    response.send(`Hola ${request.query.name}`); 
    //https://dannascornell-supreme-space-journey-wrr455vj9vc9jp7-6000.preview.app.github.dev/hello?name=Daniel%20de%20Jes%C3%BAs
});

app.post('/hello_post', function(request, response){
    response.send(`Hola ${request.body.name}`); 
});

app.listen(6000);