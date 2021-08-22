const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const store = require('data-store')({ path: path.join(__dirname, "data", "pokemon.json") });

router.post('/create', (request, response) => {
  const data = request.body;
    store.set(data?.numer,data); 
  response.send("Saving data");
})
router.get('/delete/:user', (request, response) => {
  const user = request.params.user; 
    store.del(user);
  response.send("Se ha eliminado el pokemon")


})

router.get('/show/:user', (request, response) => {
  const user = request.params.user; 
  response.json(store.get(user));
})

module.exports = router;
