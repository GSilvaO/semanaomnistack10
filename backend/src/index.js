const express = require('express'); // Importando o express para utiliza-lo
const mongoose = require('mongoose'); // Importando o mongoose para ser possível utilizar o MongoDB
const routes = require('./routes'); // Importando as rotas
const cors = require('cors');

const http = require('http');
const { setupWebSocket } = require('./websocket');

const app = express(); // Express será uma função
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://silol:123258456@studiesdb-8gvgf.gcp.mongodb.net/week10?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json()); // Configurando o express para enteder o body no formato JSON
app.use(routes);


server.listen(3333); // A aplicação irá rodar na porta 3333
