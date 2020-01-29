const { Router, urlencoded } = require('express');

const server = Router();

server.use(urlencoded({extended: false}));

server.get('/', (req, res) => {
    res.send('You got it working!')
});

module.exports = server;
