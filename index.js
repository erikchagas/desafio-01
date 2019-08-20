const express = require('express');

const server = express();

const projects = [{ id: "1", title: 'Novo projeto', tasks: [] }];

let countReq = 0;

server.use(express.json());

server.use((req, res, next) => {
  countReq += 1;
  console.log(`Requisição de número ${countReq}`);
  next();
});

function checkIfProjectExists(req, res, next){
  const { id } = req.params;

  const index = projects.findIndex(element => element.id === id);

  if (index < 0){
    return res.status(400).json({error: 'Project does not exists!'});
  }

  req.index = index;

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
  const { index } = req;
  const { title } = req.body;

  projects[index].title = title;

  return res.json(projects);
});

server.delete('/projects/:id', checkIfProjectExists, (req, res) => {  
  const { index } = req;

  projects.splice(index, 1);

  return res.json();
});

server.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {
  const { index } = req;
  const { title } = req.body;

  const { tasks } = projects[index];

  tasks.push(title);

  return res.json(projects);
});

//http://localhost:3333/
server.listen(3333);