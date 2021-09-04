const express = require('express');
const { verifyToken } = require('../middlewares/jwt');
const router = express.Router();

const data = [];

router.get('/', (request, response) => {
  response.render('groupThree/index');
})
router.post('/nuevobarrio',async (request, response) => {
  const { hood, description, value } = request.body
  const barrio = {
    hood : hood,
    description: description,
    value:value,
     }
    
  data.push(barrio);
  response.send(data)
})
router.get('/barrio',(req,response) =>{
  const hood = req.body.hood;
  const barrio = data.find((item)=> item.hood === hood )
  response.send({barrio})
})
router.post('/compare', async(request, response) => {
  
  const hood1 = request.body.hood1;
  const hood2 = request.body.hood2;
  const barrio1 = data.find((item) => item.hood == hood1);
  const barrio2 = data.find((item) => item.hood == hood2);
  const valor1 = barrio1?.value
  const valor2 = barrio2?.value
  if(valor1 < valor2) {
    response.send("uwuEl valor mas bajo es:",valor1);
  }
  else {
    response.send({"El valor mas bajo es:": valor2});

  }
})


module.exports = router;