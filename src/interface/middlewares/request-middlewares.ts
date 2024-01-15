import { Express, json } from 'express';

const setUpRequestMiddlewares = (app: Express): void => {
  app.use(json());
};

export { setUpRequestMiddlewares };
