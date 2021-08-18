const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use((request,response, next) => {
  console.log('Estoy en el middleware');
  next();
})

app.get('/', (request, response) => {
  try{
    myError.name = 100;
  } catch (err) {
    response.send("Ha ocurrido un error, intentalo de nuevo");
    console.log("Error: ", err);
  }
})

app.get('/error', (request, response) => {
  setTimeout(() => {
    try{
      myError.name = 'Borojo';
    } catch (err) {
      response.send("Ha ocurrido un error, intentalo de nuevo");
      console.log("Error: ", err);
    }
  }, 6000);
})

app.listen(PORT, () => {
  console.log('server working');
});
