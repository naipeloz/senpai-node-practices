const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const testRoutes = require('./routes/test');

// Root routes
app.get('/', (request, response) => {
  response.send("Groupal Node session")
})

app.post('/', (request, response) => {
  response.send("Groupal Node session POST")
})

// Routers
app.use('/test', testRoutes);

// Deploy

app.listen(PORT, () => {
  console.log("El servidor esta funcionando");
});