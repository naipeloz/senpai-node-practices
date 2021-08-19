const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

const store = require('data-store')({ path: path.join(__dirname, "data", "test.json") });

const userRoutes = require('./routes/user');

app.get('/', (request, response) => {
  store.set('test', 'two'); 
  response.json(store.get());
})

app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log("El servidor esta funcionando");
});