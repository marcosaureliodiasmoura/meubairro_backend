const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Olá mundo, vamos salvar vidas' });
});

module.exports = routes;
