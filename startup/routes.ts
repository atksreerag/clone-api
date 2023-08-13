import fastify from 'fastify';
import helmet from 'fastify-helmet';
import cors from 'fastify-cors';
// import productRouter from '../routes/products.router';
// import cartRouter from '../routes/cart.router';
// import profileRouter from '../routes/profile.router';
// import authRouter from '../routes/auth.router';
// import orderRouter from '../routes/order.router';
// import wishlistRouter from '../routes/wishlist.router';

export function initializeRoutes(app: fastify.FastifyInstance) {
  app.register(helmet);
  app.register(cors);
//   app.register(fastify.static(__dirname + '/public'));
//   app.register(fastify.static('uploads'));

//   app.register(authRouter, { prefix: '/auth' });
//   app.register(productRouter, { prefix: '/products' });
//   app.register(cartRouter, { prefix: '/carts' });
//   app.register(profileRouter, { prefix: '/profiles' });
//   app.register(orderRouter, { prefix: '/orders' });
//   app.register(wishlistRouter, { prefix: '/wishlists' });

  app.setErrorHandler((error, request, reply) => {
    reply.code(500).send({ error: 'Internal Server Error' });
  });
}
