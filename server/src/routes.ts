import { Router } from 'express';

import classController from './controllers/classController';
import connectionsController from './controllers/connectionsController';

const routes = Router();

routes.get('/classes', classController.index);
routes.post('/classes', classController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
