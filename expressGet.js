const express = require('express');

const app = express();

app.get('/', function(request, response){
    response.send('Hello there from express server')
});

app.get('/hello', function(request, response){
    response.send(`Hola ${request.query.name}`); 
    //https://dannascornell-supreme-space-journey-wrr455vj9vc9jp7-6000.preview.app.github.dev/hello?name=Daniel%20de%20Jes%C3%BAs
});


app.listen(6000);