import fastify from 'fastify';
import winston from 'winston';

export function initializeLogging() {
  try {
    process.on('uncaughtException', (e) => {
      winston.error(e.message, e);
    });

    process.on('unhandledRejection', (e) => {
      winston.error(e.message, e);
    });

    winston.add(
      new winston.transports.Console({
        format: winston.format.combine(winston.format.prettyPrint()),
      })
    );
  } catch (error) {
    winston.error(error);
  }
}
