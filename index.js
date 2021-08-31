// Import libs
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Setup app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// CORS 
app.use(cors());

// Routes
app.get('/', (response, request) => {
  request.send("Practica Senpai");
})

// Run server
app.listen(PORT, () => {
  console.log('server working');
});
