import clientsModel from '../models/clientsModel.js';

async function logI(req, res) {
  try {
    // Capturar o email da requisição
    const email = req.body.email;
    const senha = req.body.senha;
    console.log(req.body)

    // Verificar se o email foi fornecido
    if (!email) {
      return res.status(400).json({ error: 'Email é obrigatório' });

    }

    // Buscar o cliente no banco de dados
    const client = await clientsModel.findOne({ where: { email , senha } });

    if (client) {
      // Definir status de login como verdadeiro
      const logIStatus = true;
      res.json({ logI: logIStatus });
    } else {
      res.status(404).json({ error: 'Cliente não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export default logI;

