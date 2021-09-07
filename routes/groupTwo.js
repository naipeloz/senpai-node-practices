const express = require('express');
const router = express.Router();

const data = [];

router.get('/', (request, response) => {
  response.render('groupTwo/index');
})

router.post('/consult-city-tem', async (request, response) => {
  const city = request.body.city;
  const temperature = request.body.temperature;
  const day = day.find((item) => day.city === day);
  
})

router.get('/city-tem', (request, response) => {
  const city = request.query.city;
  console.log('city:',city);
  response.send("Ciudad")

 })
 

module.exports = router;