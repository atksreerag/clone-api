import { FastifyInstance } from 'fastify';
import * as repository from '../repository/auth/auth.repository';
import * as v2repository from '../repository/auth/auth.repository';

export default async function (fastify: FastifyInstance) {
  fastify.post('/signin', async (request, reply) => {
    repository.signIn(request, reply);
  });

  fastify.post('/signup', async (request, reply) => {
    repository.signUp(request, reply);
  });

  fastify.post('/verification', async (request, reply) => {
    repository.userVerification(request, reply);
  });

  fastify.post('/v2/login', async (request, reply) => {
    v2repository.userLogin(request, reply);
  });

  fastify.post('/v2/verification', async (request, reply) => {
    v2repository.userLoginVerification(request, reply);
  });

  fastify.post('/resend', async (request, reply) => {
    repository.resendOTP(request, reply);
  });
}
