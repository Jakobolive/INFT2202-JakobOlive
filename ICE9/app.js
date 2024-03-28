const http = require('http');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const dotenv = require('dotenv');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
});

app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

const userController = require('./controllers/userController.js');
const userRoutes = require('./routes/user');

app.get('/', userController.homeView);

app.use('/user', userRoutes);

server.listen(3000, () => {
    console.log(`Server running`);
    });  
