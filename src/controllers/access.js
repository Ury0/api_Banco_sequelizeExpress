import { accessModel } from '..models/accessModel.js';

function findAll(req, res) {
    accessModel.findAll()
        .then((result) => res.json(result))
        .catch((error) => res.status(500).send(error));
}

function addAccess(req, res) {
    accessModel.create({
        timestamp: req.body.timestamp,
        hostname: req.body.hostname, // Corrigido de 'senha' para 'saldo'
        ip: req.body.ip
    })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
}

export default { findAll, addAccess }