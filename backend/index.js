const { response } = require('express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const pg = require('knex')({
  client: 'pg',
  connection: 'postgres://postgres:postgres@localhost:5432/students',
  searchPaths: ['knex', 'public']
})

app.get('/', async (request, response) => {
  const result = await pg('categories').select('*');
  console.log('result:', result);
  response.send("Hola Senpai");
})

app.get('/categories', async(request, response)  => {
  const result = await pg('categories').select('*');
  response.json(result)
})

app.get('/students', async(request, response)  => {
  const result = await pg('students').select('*');
  response.json(result)
})

app.post('/enroll-student', async(request, response) => {
  const body = request.body;
  console.log('body:', body)
  response.send("Hey")
})

app.get('/courses',  async (request, response) =>  {
  const result = await pg('courses')
  .innerJoin('categories',  'courses.category_id', 'categories.id')
  .select(['categories.name', 'courses.id',  'courses.name as course_name']);
  response.json(result);
})

app.listen(5001, () => {
  console.log('Server is working');
})