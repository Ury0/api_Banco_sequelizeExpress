import ClientRepository from '../models/contaModel';

function findAll(req, res){
    ClientRepository.findAll().then((result) => res.json(result));
}
function findCont(req, res){
    ClientRepository.findByPk(req.params.id).then((result) => res.json(result))

}
function addCont(req, res){
    ClientRepository.create({
        nome: req.body.nome,
        senha: req.body.saldo,
        cliente: req.body.cliente,
        token: req.body.token
    }).then((result) => res.json(result))
}
async function updateCont(req, res){
    await ClientRepository.update({
        nome: req.body.nome,
        senha: req.body.saldo,
        cliente: req.body.cliente,
        token: req.body.token
    },
    {
        where:{
            id: req.params.id
        }
    });
    ClientRepository.findByPk(req.params.id).then((result) => res.json(result))
}
async function deleteCont(req, res){
    await ClientRepository.destroy({
        where:{
            id: req.params.id
        }
    });
    (await ClientRepository.findAll()).then((result) => res.json(result));
}

export default {findAll, addCont, findCont, updateCont, deleteCont}