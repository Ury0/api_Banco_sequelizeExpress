import clientsModel from '../models/clientsModel.js';

async function logI(req, res) {
   clientsModel.findOne(req.params.email).then((result) => res.json(result))
  .catch((error) => res.status(500).send(error));
  
}



export default logI;