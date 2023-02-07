import express from 'express';
import NewsController from "../app/controllers/NewsController.js";
const NewsRouter = express.Router();

NewsRouter.use('/detail', NewsController.detail)
NewsRouter.use('/', NewsController.index);

export default NewsRouter;