const express = require('express');
const router = express.Router();


const cursos = [];

router.get('/', (request, response) => {
  response.render('groupFour/index');
})

// Ruta get con un parametro (categoria del curso) // NO FUNCIONA

router.get('/cursos/:category', (request, response) => {
  const category = request.params.category
  const cursosCategories = cursos.find((item)=> item.category == category);
 response.json(cursosCategories);  
   
})

// Ruta post para crear cursos 


router.post('/cursos', async (request, response) => {

  const cursoNuevo = {
    category: request.body.category,
    value: request.body.value,
    name: request.body.name
  }
  cursos.push(cursoNuevo);
  response.json({
    success: true,
    cursoNuevo,
    cursos,
  })
});

// Ruta post para consultar cursos

router.post('/consultaCursos', async (request, response) => {

 
  const consulta = cursos.find((item) => item.category === request.body.category);
  response.json({
    consulta,
    
  }

  )
  
});


module.exports = router;