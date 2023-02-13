// Set route for news app
import express from 'express';
import NewsController from '../app/controllers/NewsController.js';
const NewsRouter = express.Router();

NewsRouter.get('/:id', NewsController.detail);
NewsRouter.get('/', NewsController.index);

export default NewsRouter;
