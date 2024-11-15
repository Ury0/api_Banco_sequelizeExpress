import contaModel from '../models/contaModel.js'; // Certifique-se de que o caminho está correto

function findAll(req, res) {
    contaModel.findAll()
        .then((result) => res.json(result))
        .catch((error) => res.status(500).send(error));
}

function findCont(req, res) {
    contaModel.findByPk(req.params.id)
        .then((result) => res.json(result))
        .catch((error) => res.status(500).send(error));
}

function addCont(req, res) {
    contaModel.create({
        nome: req.body.nome,
        saldo: req.body.saldo, // Corrigido de 'senha' para 'saldo'
        cliente: req.body.cliente,
        token: req.body.token,
        clientId: req.body.clientId // Certifique-se de incluir a referência ao cliente
    })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
}

async function updateCont(req, res) {
    await contaModel.update({
        nome: req.body.nome,
        saldo: req.body.saldo, // Corrigido de 'senha' para 'saldo'
        cliente: req.body.cliente,
        token: req.body.token,
        clientId: req.body.clientId // Certifique-se de incluir a referência ao cliente
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        return contaModel.findByPk(req.params.id);
    })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
}

async function deleteCont(req, res) {
    await contaModel.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        return conta.findAll();
    })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
}

export default { findAll, addCont, findCont, updateCont, deleteCont };
