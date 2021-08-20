const express = require('express');
const router = express.Router();

const path = require('path');
const store = require('data-store')({ path: path.join(__dirname, "..", "data", "test.json") });

router.get('/save', (request, response) => {
  store.set('test', 'two'); 
  response.send("Saving data");
})

router.get('/show', (request, response) => {
  response.json(store.get());
})

module.exports = router;
