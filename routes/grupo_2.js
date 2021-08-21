const express = require('express');
const router = express.Router();
const path = require('path');
const store = require('data-store')({ path: path.join(__dirname, "data", "pokemon.json") });

router.post('/create', (request, response) => {
  const data = request.body;
    store.set('pokemones',data); 
  response.send("Saving data");
})

router.get('/show', (request, response) => {
  response.json(store.get());
})

router.get('/show/:id', (request, response) => {
  const id = req.params.id;
  response.json(store.get(id));
})

module.exports = router;
