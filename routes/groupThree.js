const express = require('express');
const router = express.Router();

const data = [];

router.get('/', (request, response) => {
  response.render('groupThree/index');
})

module.exports = router;