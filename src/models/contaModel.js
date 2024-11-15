import { Sequelize } from 'sequelize';
import { db } from '../db.js';

export default db.define('conta', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        
    },
    nome:{
        type: Sequelize.STRING,
    },
    saldo:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    token:{
        type: Sequelize.STRING,
        allowNull: false
    },
    clientId: { 
        type: Sequelize.INTEGER.UNSIGNED, 
        allowNull: false, 
        references: { 
            model: 'clients', // Nome da tabela 
            key: 'id' // Nome da coluna referenciada 
        } 
    }
});
