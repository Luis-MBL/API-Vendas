import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';

const routes = Router();

routes.use('/products', productsRouter);

routes.get('/status', (request, response) => {
  return response.json({
    application: true,
  });
});

export default routes;
