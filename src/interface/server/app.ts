import express from 'express';

import { setUpRequestMiddlewares } from '../middlewares/request-middlewares';
import { setupRoutes } from '../routers/router';

const app = express();

setUpRequestMiddlewares(app);
setupRoutes(app);

app.listen(3333, () => {
  console.log('Server started on port 3333');
});

export { app };
