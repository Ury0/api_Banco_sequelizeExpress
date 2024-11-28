import clientsModel from '../models/clientsModel.js';

async function logI(req, res) {
  try {
    const user = await clientsModel.findOne(req.params.email);
    if (user) {
      process.env.login = true;
      res.status(200).send({ message: 'login bem-sucedido!' });
    } else {
      process.env.login = false; // Definir para false na tentativa falha
      res.status(401).send({ message: 'credenciais invalidas!' }); // Corrigir typo em "message"
    }
  } catch (error) {
    process.env.login = false;
    console.error('erro no login:', error);
    res.status(500).send({ message: 'erRo interno no servidor' });
  }
}

export default logI;