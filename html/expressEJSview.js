const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/public',express.static('assets',{
    etag: false, //etag desactivado
    maxAge: '5h' //tiempo válido de caché
})); //middleware

//If-None-Match: W/"Etag"

app.get('/', function(request, response){
    response.render('index');

})

app.listen('7000');