const express = require('express');
//const LivrosController = require('./controller/LivrosController');


const routes = express.Router();

routes.get('/', (req, res) => {
res.send('Olá leonardo')
});

////////////////////////////////////////////////////////////////

// Rotas da tabela livros
//routes.get('/livros', LivrosController.index)// rota para buscar todos os livros

module.exports = routes;// exporta as rotas para do aplicação