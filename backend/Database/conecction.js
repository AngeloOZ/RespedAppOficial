import Sequelize from 'sequelize';

const path = process.env.DB_PATH;

const sequelize = new Sequelize(path);

const connection = sequelize;

export default connection;