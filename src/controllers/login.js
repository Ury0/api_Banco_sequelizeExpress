import clientsModel from '../models/clientsModel.js';

async function logI(req, res) {
  const { email, senha } = req.params; // Use req.body para POST requests

  try {
    const user = await clientsModel.findOne({
      where: { email, senha }
    });
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
    res.status(500).send({ message: 'erro interno no servidor' });
  }
}

export default logI;