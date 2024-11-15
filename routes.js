import express from 'express';
import clients from './src/controllers/clients.js';
import conta from './src/controllers/conta.js';

const routes = express.Router();

routes.get("/", function (req, res, next) {
    res.statusCode(200).send("Ok").end();
});

routes.get('/clients',clients.findAll, function (res) {
    res.statusCode(200).send('requisição recebida').end();
});
routes.get('/clients/:id',clients.findClient);
routes.put('/clients/:id',clients.updateClient);
routes.delete('/clients/:id',clients.deleteClient);
routes.post('/clients', clients.addClient);

routes.get('/conta', conta.findAll);
routes.get('/conta/:id',conta.findCont);
routes.put('/conta/:id', conta.updateCont);
routes.post('/conta');
routes.delete('/conta/:id');

export { routes as default };