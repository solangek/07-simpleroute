const http = require('http');
const server = http.createServer( (req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        name: 'John Doe',
        age: 30
    }));
});

server.listen(3000);

// run this example with "node app-json.js"