const http = require('http');
const server = http.createServer( (req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-type', 'text/html');
    res.write('<html><head></head><body>');
    res.write('<h1>Hello world!</h1>');
    res.write('</body></html>');
    res.end(); // close stream
});

server.listen(3000);

// run this example with "node app-simple.js"
// browse to http://localhost:3000/