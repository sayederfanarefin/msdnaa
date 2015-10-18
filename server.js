var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello Code and Azure Web Apps! and then pushed! and then commit from vscode to git to azure B|</h1>');
}).listen(process.env.PORT);