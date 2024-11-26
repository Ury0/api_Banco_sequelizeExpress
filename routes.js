import express from 'express';
import clients from './src/controllers/clients.js';
import conta from './src/controllers/conta.js';
import logI from './src/controllers/login.js';

const routes = express.Router();

routes.post("/", logI, function (res) {
    res.statusCode(200).send("Ok").end();
});



routes.get('/clients',clients.findAll, function (res) {
    res.statusCode(200).send('requisição recebida').end();
});
routes.get('/clients/:id',clients.findClient, function (res){
    res.statusCode(200).send('requisição recebida').end();
});
routes.put('/clients/:id',clients.updateClient, function (res){
    res.statusCode(200).send('requisição recebida').end();
});
routes.delete('/clients/:id',clients.deleteClient, function (res){
    res.statusCode(200).send('requisição recebida').end();
});
routes.post('/clients', clients.addClient, function (res){
    res.statusCode(200).send('requisição recebida').end();
});



routes.get('/conta', conta.findAll, function (res){
    res.statusCode(200).send(' ').end();
});
routes.get('/conta/:nome',conta.findCont, function (res){
    res.statusCode(200).send(' ').end();
});
routes.put('/conta/:id', conta.updateCont, function (res){
    res.statusCode(200).send(' ').end();
});
routes.post('/conta',conta.addCont, function (res){
    res.statusCode(200).send(' ').end();
});
routes.delete('/conta/:id',conta.deleteCont, function (res){
    res.statusCode(200).send(' ').end();
});


export { routes as default };