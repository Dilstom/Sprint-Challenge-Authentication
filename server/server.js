const express = require('express');
const cors = require('cors');

const configureRoutes = require('./config/routes');

const server = express();
const corsOptions = {};

server.use(express.json());
server.use(cors({ origin: "http://localhost:3001", credentials: true }));

configureRoutes(server);

module.exports = {
    server,
};
