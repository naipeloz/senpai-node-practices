const express = require('express');
const router = express.Router();

const data = [];

router.get('/', (request, response) => {
  response.render('groupFive/index');
})

module.exports = router;