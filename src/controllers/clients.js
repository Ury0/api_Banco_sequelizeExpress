import clientsModel  from '../models/clientsModel.js';

function findAll(req,res){
    ClientRepository.findAll().then( (result) => res.json(result));
}

function findClient(req,res){
    clientsModel.findByPk(req.params.id)
    .then( (result) => res.json(result))
}

function addClient(req,res){
    clientsModel.create({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        cep: req.body.cep,
        senha: req.body.senha
    }).then( (result) => res.json(result))
};

async function updateClient(req,res){
    await clientsModel.update({
        nome: req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        cep: req.body.cep,
        senha: req.body.senha
    },
    {
        where: {
          id: req.params.id
    }
    });

    clientsModel.findByPk(req.params.id)
    .then( (result) => res.json(result))
};

async function deleteClient(req,res){
    await clientsModel.destroy({
        where: {
          id: req.params.id
        }
      });

    clientsModel.findAll().then((result) => res.json(result));
};

export default { findAll, addClient, findClient, updateClient, deleteClient } 

