// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./public/db.json');
// const middlewares = jsonServer.defaults({
//     static: './build',
// });

// const PORT = process.env.PORT || 3001;

// server.use(middlewares);
// server.use(router);

// server.listen(PORT, () => {
//     console.log('Server is running');
// });

const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist/db.json')));

const port = process.env.PORT || 8080;

app.listen(port);
