const express = require('express');

const server = express();

const projects = [{ id: "1", title: 'Novo projeto', tasks: [] }];

server.use(express.json());

server.get('/projects', (req, res) => {
  return res.json(projects);
});

//http://localhost:3333/
server.listen(3333);