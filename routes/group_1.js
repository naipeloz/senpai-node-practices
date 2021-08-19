const express = require('express');
const router = express.Router();
const store = require('data-store')({ path: path.join(__dirname, "data", "test.json") });

router.get('/', (request, response) => {
  store.set('test', 'two'); 
  response.json(store.get());
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
