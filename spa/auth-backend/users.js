// users.js
const bcrypt = require('bcryptjs');

let users = [
    {
        username: 'usuario',
        password: bcrypt.hashSync('contraseña', 8),
        email: 'usuario@example.com'
    },
    {
        username: 'ejemplo',
        password: bcrypt.hashSync('123456', 8),
        email: 'ejemplo@example.com'
    },
    {
        username: 'admin',
        password: bcrypt.hashSync('admin123', 8),
        email: 'admin@example.com'
    }
];

function findUserByUsername(username) {
    return users.find(user => user.username === username);
}

function findUserByEmail(email) {
    return users.find(user => user.email === email);
}

function addUser(username, password, email) {
    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = { username, password: hashedPassword, email };
    users.push(newUser);
    return newUser;
}

module.exports = { findUserByUsername, findUserByEmail, addUser };
