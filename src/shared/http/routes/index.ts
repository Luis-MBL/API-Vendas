import { Router } from 'express';

const routes = Router();

routes.get('/status', (request, response) => {
  return response.json({
    application: true,
  });
});

export default routes;
