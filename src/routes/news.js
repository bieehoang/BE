// Set route for news app
import express, { Router } from 'express';
import NewsController from '../app/controllers/NewsController.js';
import DetailRouters from './detail.js';
const NewsRouter = express.Router();

NewsRouter.get('/create', NewsController.create);
NewsRouter.get('/listed', NewsController.listed);
NewsRouter.post('/store', NewsController.store);
NewsRouter.delete('/:_id', NewsController.delete);
NewsRouter.put('/:_id', NewsController.changed);
NewsRouter.get('/:_id/edit', NewsController.edit);
NewsRouter.use('/detail', DetailRouters);
NewsRouter.get('/', NewsController.index);

export default NewsRouter;
