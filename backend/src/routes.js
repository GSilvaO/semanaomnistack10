const { Router } = require('express'); // Importando somente o módulo Router do express

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes; // Exportando as rotas para o resto da aplicação

