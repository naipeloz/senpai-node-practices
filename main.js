const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/user');

app.get('/', (request, response) => {
  response.send("Bienvenidos a nuestra app");
})

app.use('/user', userRoutes);

app.listen(5000, () => {
  console.log("El servidor esta funcionando");
});