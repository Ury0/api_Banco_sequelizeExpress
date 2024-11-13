import conta from '../models/contaModel.js'; // Certifique-se de que o caminho está correto

function findAll(req, res) {
    conta.findAll()
        .then((result) => res.json(result))
        .catch((error) => res.status(500).send(error));
}

function findCont(req, res) {
    conta.findByPk(req.params.id)
        .then((result) => res.json(result))
        .catch((error) => res.status(500).send(error));
}

function addCont(req, res) {
    conta.create({
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
    await conta.update({
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
        return conta.findByPk(req.params.id);
    })
    .then((result) => res.json(result))
    .catch((error) => res.status(500).send(error));
}

async function deleteCont(req, res) {
    await conta.destroy({
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
