const express = require('express');

const server = express();

const projects = [{ id: "1", title: 'Novo projeto', tasks: [] }];

server.use(express.json());

function checkIfProjectExists(req, res, next){
  const { id } = req.params;

  const index = projects.findIndex(element => element.id === id);

  if (index < 0){
    return res.status(400).json({error: 'Project does not exists!'});
  }

  return next();
}

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

server.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const index = projects.findIndex(element => element.id === id);

  projects[index].title = title;

  return res.json(projects);
});

server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(element => element.id === id);

  projects.splice(index, 1);

  return res.json();
});

server.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const index = projects.findIndex(element => element.id === id);

  const { tasks } = projects[index];

  tasks.push(title);

  return res.json(projects);
});

//http://localhost:3333/
server.listen(3333);