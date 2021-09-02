const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, verifyToken } = require('../middlewares/jwt');
const router = express.Router();

const users = [];

// Create an user
router.post('/register', async (request, response) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(request.body.password, salt);

  const newUser = {
    name : request.body.name,
    email: request.body.email,
    password,
  }
  users.push(newUser);
  response.json({
    success: true,
    newUser,
    users,
  })
});

// Log in a user
router.post('/login', async (request, response) => {
  const email = request.body.email;
  const user = users.find((item) => item.email === email);
  if (!user) {
    response.json({
      success: false,
      message: "El usuario no esta registrado",
    });
  } else {
    const validPassword = await bcrypt.compare(request.body.password, user.password);
    if (!validPassword) {
      response.json({
        success: false,
        message: "El password no es valido",
      })
    } else {
      // Create JWT Token
      const token = jwt.sign(user, TOKEN_SECRET);
      response.json({
        success: true,
        message: "El usuario esta autenticado",
        token,
      })
    }
  }
});

router.get('/usuarios', verifyToken, async (request, response) => {
  console.log("User: ", request.user);
  response.json({
    success: true,
    users
  })
})

module.exports = router;
