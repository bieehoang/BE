// For URL in home site
import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
const SiteRouter = express.Router();

SiteRouter.get('/search', SiteController.search);
SiteRouter.get('/', SiteController.home);

export default SiteRouter;
