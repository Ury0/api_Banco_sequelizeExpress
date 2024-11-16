import { Sequelize } from "sequelize";
import  db  from '../db.js';

export default db.define('access',{
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
        
    },
    timestamp:{
        type: Sequelize.DATATIME,
        allowNull: false
    },
    hostname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    ip:{
        type: Sequelize.STRING,
        allowNull: false
    }
});
