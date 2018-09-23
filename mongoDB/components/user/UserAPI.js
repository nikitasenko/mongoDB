const express = require('express');
const app = module.exports = express();
const UserService = require('./UserService');

app.get('/:id', UserService.getUser);
app.get('/', UserService.getUsers);
app.post('/', UserService.createUser);
app.put('/:id', UserService.updateUser);
app.delete(':id', UserService.deleteUser);

