import express from 'express';
import routes from './routes.js';
import db from './src/db.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Certifique-se de carregar as variáveis de ambiente

const app = express();

const corsOptions = { 
    origin: 'http://localhost:4200', // Permitir apenas esta origem 
    optionsSuccessStatus: 200 // Alguns navegadores exigem esse status para solicitações bem-sucedidas 
}; 
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', routes); // Use as rotas com um prefixo, se preferir

// Sincronize o banco de dados e inicie o servidor
db.sync()
    .then(() => {
        console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
        app.listen(3000, () => {
            console.log('Servidor iniciado na porta 3000');
        });
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error);
    });
