import fastify, { FastifyInstance } from 'fastify';
import fastifyStatic from 'fastify-static';
import { join } from 'path';
import dotenv from 'dotenv';
import { createReadStream } from 'fs';

dotenv.config();

const app: FastifyInstance = fastify();
//const app: fastify.FastifyInstance = fastify();

import { initializeLogging } from './startup/logging';
import { initializeDatabaseService } from './services/database.service';
import { initializeRoutes } from './startup/routes';

// Initialize logging
initializeLogging();

// Initialize database service
initializeDatabaseService();

// Initialize routes
initializeRoutes(app);

app.get('/', async (request, reply) => {
  return `SERVER RUNNING...${process.env.TEST_ENV_VARIABLE}`;
});

// Serve static files
app.register(fastifyStatic, {
  root: join(__dirname, 'public'),
  prefix: '/',
});

app.get('/', async (request, reply) => {
  reply.type('text/html');
  return createReadStream(join(__dirname, 'public', 'index.html'));
});

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`SERVER LISTENING ON PORT ${port}`);
});
