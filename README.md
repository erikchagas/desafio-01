# Desafio #1 - Bootcamp Rocketseat
Adicionar projetos e suas tarefas por meio de métodos de API Rest com Node.js e Express.

## Estrutura Básica de um Projeto
```js
[
  {
    id: "1",
    title: 'Novo projeto',
    tasks: ['Nova tarefa']
  }
]
```

## Métodos

* `GET /projects`: Retorna a lista de projetos e suas respctivas tarefas associadas;

* `POST /projects`: Adiciona um novo projeto com um array de tarefas vazias e com um `id` e um `title` recebidos no body;

* `PUT /projects/:id`: Atualiza o `title` recebido no body de acordo com o `id` passado como parâmetro na rota;

* `DELETE /projects/:id` - Remove o projeto de acordo com o `id` passado como parâmetro na rota;

* `POST /projects/:id/tasks` - Adiciona uma tarefa por meio de um `title` recebido no body de acordo com o `id` passado como parâmetro na rota;