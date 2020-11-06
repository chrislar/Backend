const express = require('express');
const http = require('http');
const App = express();

const port = (process.env.PORT || 5000);

App.set('port', port );
const server = http.createServer(App);

server.listen(port, () => {console.log('listening on port 5000')});