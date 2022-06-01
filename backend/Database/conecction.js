import Sequelize from 'sequelize';

const path = (process.env.ENVIROMENT == "local") ? process.env.DB_PATH_LOCAL : process.env.DB_PATH;

const sequelize = new Sequelize(path);

const connection = sequelize;

export default connection;