import { Sequelize } from 'sequelize'
import db from '../db';

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
    cliente:{
        type: Sequelize.OBJECT,
        allowNull: false,
        unique: true
    },
    token:{
        type: Sequelize.STRING,
        allowNull: false
    }
})