const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
  response.send("Hola");
})

router.get('/saludo', (request, response) => {
  response.send("Saludo a un usuario");
})

router.get('/bienvenida', (request, response) => {
  response.send("Bienvenida usuario");
})

router.get('/crear', (request, response) => {
  response.send("Crear un usuario");
})

module.exports = router;
