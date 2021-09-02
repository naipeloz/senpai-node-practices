// Import libs and routers
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouters = require('./routes/auth');
const groupOneRouter = require('./routes/groupOne');
const groupTwoRouter = require('./routes/groupTwo');
const groupThreeRouter = require('./routes/groupThree');
const groupFourRouter = require('./routes/groupFour');
const groupFiveRouter = require('./routes/groupFive');
const groupSixRouter = require('./routes/groupSix');

// Setup app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// CORS 
app.use(cors());

// Routes
app.get('/', (request, response) => {
  response.render('home',{})
})

app.use('/auth', authRouters);
app.use('/grupo-1', groupOneRouter);
app.use('/grupo-2', groupTwoRouter);
app.use('/grupo-3', groupThreeRouter);
app.use('/grupo-4', groupFourRouter);
app.use('/grupo-5', groupFiveRouter);
app.use('/grupo-6', groupSixRouter);

app.get('*', function(request, response){
  response.render('error',{
    code: '404',
    error: 'Página no encontrada'
  })
});

// Run server
app.listen(PORT, () => {
  console.log('server working');
});
