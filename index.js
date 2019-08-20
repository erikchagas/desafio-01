const express = require('express');

const server = express();

const projects = [{ id: "1", title: 'Novo projeto', tasks: [] }];

server.use(express.json());

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({
    id,
    title,
    tasks: []
  });

  return res.json(projects);
});

//http://localhost:3333/
server.listen(3333);