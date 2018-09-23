const express = require('express');
const app = module.exports = express();

app.use('/user', require('./../../components/user/UserAPI'));

app.get('/', (req, res) => {
    throw new Error('api ok, please choose component');
});
app.get('*', (req, res) => {
    throw new Error('api ok, wrong route');
});
