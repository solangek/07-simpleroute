const http = require('http');
const server = http.createServer( (req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'application/json');
    let myobj = {
        name: 'John',
        job: 'Dev',
        age: 30
    };
    res.end(JSON.stringify(myobj)); // must convert to String before sending
});

server.listen(3000);

// run this example with "node app-json.js"