const http = require('http');

// import the myroutes.js file
const routes = require('./myroutes');
const server = http.createServer(routes.handler);
server.listen(3000);

// run this example by typing: node app.js in the terminal