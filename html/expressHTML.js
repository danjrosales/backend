const express = require('express');

const app = express();

app.use('/public',express.static('assets')); //middleware

app.get('/', function(request, response){
    response.sendFile('index.html', {
        root: __dirname
    });
    //response.send(__dirname);
})

app.listen('7000');