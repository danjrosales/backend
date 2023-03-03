const http = require('http');

function myRequest(request, response){
    response.end('Hello there!');
}

let myServer = http.createServer(myRequest);

myServer.listen(4000);