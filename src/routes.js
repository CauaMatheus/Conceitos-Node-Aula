const { Router, response, request } = require("express");

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({
    "message": "Hello World! - Fundamentos NodeJs"
  })
});

routes.get('/courses', (request, response) => {
  return response.json(["Curso1", "Curso2", "Curso3", "Curso4"]);
});

routes.put('/courses', (request, response) => {
  return response.json(["Curso6", "Curso2", "Curso3", "Curso4"]);
});

routes.patch('/', (request, response) => {
  return response.json(["Curso6", "Curso7", "Curso3", "Curso4"]);
})

routes.delete('/', (request, response) => {
  return response.json(["Curso6", "Curso7", "Curso4"]);
});

module.exports = routes;