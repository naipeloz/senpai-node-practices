const express = require('express');
const { verifyToken } = require('../middlewares/jwt');
const router = express.Router();

const data = [];

router.get('/', (request, response) => {
  response.render('groupThree/index');
})
router.post('/nuevobarrio',async (request, response) => {
  const barrio = {
    hood : request.body.hood,
    description: request.body.description,
    value:request.body.value,
     }
  data.push(barrio);
  response.send(data)
})
router.post('/compare', async(request, response) => {
  const hood1 = request.body.hood1;
  const hood2 = request.body.hood2;
  const barrio1 = data.find((item) => item.hood == hood1);
  const barrio2 = data.find((item) => item.hood == hood2);
  console.log(barrio1.hood)
  if(barrio1?.value > barrio2?.value) {
    response.send("El valor del Barrio:",barrio1.value);
  }
  else {
    response.send("El valor del Barrio:",barrio2.value);

  }
})


module.exports = router;