//const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>Thank you for submitting your form!</body>' );
        res.write('</html>');
        return res.end();
    }

    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

};  // end of requestHandler

// module.exports = {
// handler: requestHandler,
// someText: 'Some hard coded text'
// };
// or written shortly as:


// these are the functions you want to publish
// as ‘public’ when you import this file
exports.handler = requestHandler;
exports.someText = 'Some hard coded text';
