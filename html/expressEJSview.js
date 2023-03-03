const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/public',express.static('assets')); //middleware

app.get('/', function(request, response){
    response.render('index');

})

app.listen('7000');