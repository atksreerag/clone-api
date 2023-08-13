import { Sequelize } from 'sequelize';
import winston from 'winston';
import config from '../config/config';

const dbUrl = config.DB_URL;

const sequelize = new Sequelize(dbUrl, {
  dialect: 'postgres',
  logging: false, // Set to true to log SQL queries
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to PostgreSQL database at ${dbUrl}`);
    winston.info(`Connected to PostgreSQL database at ${dbUrl}`);
  })
  .catch((error) => {
    console.error(`Error connecting to PostgreSQL database: ${error}`);
    winston.error(`Error connecting to PostgreSQL database: ${error}`);
  });

process.on('SIGINT', async () => {
  await sequelize.close();
  winston.info('PostgreSQL connection closed due to application termination');
  process.exit(0);
});

export default sequelize;
