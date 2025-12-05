require('dotenv').config();
const http = require('http');
const app = require('./index.js')

// create server
const server = http.createServer(app);
console.log("test");
server.listen(process.env.PORT);
