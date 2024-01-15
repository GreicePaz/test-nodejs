import { Express, Router } from 'express';

import { CreateProductController } from '../controllers/create-product-controller';

const createProductController = new CreateProductController();

export const setupRoutes = (app: Express): void => {
  const router = Router();

  router.post(
    '/product',
    createProductController.handle.bind(createProductController),
  );
  app.use('', router);
};
