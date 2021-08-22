const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyparser = require('body-parser');
const testRoutes = require('./routes/test');
const testPokemon = require('./routes/grupo_2');
app.use(bodyparser.json());
// Root routes
app.get('/', (request, response) => {
  response.send("Groupal Node session")
})

app.post('/', (request, response) => {
  response.send("Groupal Node session POST")
})
// Routers
app.use('/test', testRoutes);
app.use('/group_2', testPokemon);

// Deploy

app.listen(PORT, () => {
  console.log("El servidor esta funcionando");
});
