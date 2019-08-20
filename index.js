const express = require('express');

const server = express();

server.use(express.json());

server.get('/projects', (req, res) => {
  return res.json({message: 'It works!'});
});

//http://localhost:3333/
server.listen(3333);