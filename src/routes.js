const { Router, response, request } = require("express");

const routes = Router()

routes.get('/courses', (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json({
    "message": "Hello World! - Fundamentos NodeJs"
  })
});

routes.post('/courses', (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
});

routes.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
});

routes.patch('/courses/:id', (request, response) => {
  return response.json(["Curso6", "Curso7", "Curso3", "Curso4"]);
})

routes.delete('/courses/:id', (request, response) => {
  return response.json(["Curso6", "Curso7", "Curso4"]);
});

module.exports = routes;