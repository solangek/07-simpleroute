const http = require('http');

// import the myroutes.js file
//const routes = import('./myroutes.js');
// or you can also use the following syntax:
const routes = require('./myroutes.js');

const server = http.createServer(routes.handler);
server.listen(3000);

// run this example by typing: node app.js in the terminal
// browse to http://localhost:3000/
