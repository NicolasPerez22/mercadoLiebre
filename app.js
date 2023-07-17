const express = require('express');
const path = require('path');
const dovent= require('dovent').config();
const app = express();

const rutaPublic = path.join(__dirname, './public');

app.use(express.static(rutaPublic));

app.get('/', (req, res) => {
    const ruta = path.join(__dirname, './views/home.html');
    res.sendFile(ruta);
});

app.get('/login', (req, res) => {
    const ruta = path.join(__dirname, './views/login.html');
    res.sendFile(ruta);
});

app.get('/register', (req, res) => {
    const ruta = path.join(__dirname, './views/register.html');
    res.sendFile(ruta);
});

app.listen(process.env.PORT, () => {
    console.log('server con puerto' + process.env.PORT + 'andando');
});
