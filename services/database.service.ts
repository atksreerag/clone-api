
import { Sequelize } from 'sequelize';
import winston from 'winston';
import config from '../config/config';

const dbUrl = config.DB_URL;

// Create Sequelize instance
const sequelize = new Sequelize(dbUrl);

export default async () => {
  try {
    await sequelize.authenticate(); // Test the connection

    console.log(`Connected to PostgreSQL at ${dbUrl}`);
    winston.info(`Connected to PostgreSQL at ${dbUrl}`);
  } catch (error) {
    console.log(`PostgreSQL connection error: ${error.message}`);
    winston.error(`PostgreSQL connection error: ${error.message}`);
  }

  process.on('SIGINT', async () => {
    try {
      await sequelize.close();

      winston.error('PostgreSQL is disconnected due to application termination');
      process.exit(0);
    } catch (error) {
      winston.error(`Error while closing PostgreSQL connection: ${error.message}`);
      process.exit(1);
    }
  });
};
