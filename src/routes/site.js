import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
const SiteRouter = express.Router();

SiteRouter.use('/', SiteController.home);

export default SiteRouter;
