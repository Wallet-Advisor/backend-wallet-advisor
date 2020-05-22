const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const routes = require("../routes/auth")
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api', routes);

server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Hello from Wallet Advisor backend!'
  });
});

server.get('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Invalid route!'
  });
});

module.exports = server;