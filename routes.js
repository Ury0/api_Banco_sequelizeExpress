import express from 'express';
import clients from './src/controllers/clients.js';

const routes = express.Router();

routes.get('/clients',clients.findAll);
routes.get('/clients/:id',clients.findClient);
routes.put('/clients/:id',clients.updateClient);
routes.delete('/clients/:id',clients.deleteClient);
routes.post('/clients', clients.addClient);

routes.get('/cont', conta.findAll);
routes.get('/cont/:id',conta.findCont);
routes.put('/cont/:id', conta.updateCont);
routes.post('/cont');
routes.delete('/cont/:id');

export { routes as default };