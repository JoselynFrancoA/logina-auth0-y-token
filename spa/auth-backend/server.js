const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors'); 
const { findUserByUsername, findUserByEmail, addUser } = require('./users');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); 

const secretKey = 'mi_secreto_super_secreto';

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = findUserByUsername(username);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).json({ auth: false, token: null });
  }

  const token = jwt.sign({ id: user.username, email: user.email }, secretKey, {
    expiresIn: 86400
  });
  res.status(200).json({ auth: true, token });
});

app.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  const userByUsername = findUserByUsername(username);
  const userByEmail = findUserByEmail(email);

  if (userByUsername || userByEmail) {
    return res.status(409).json({ message: 'Usuario o correo electrónico ya existe' });
  }

  const newUser = addUser(username, password, email);
  res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

