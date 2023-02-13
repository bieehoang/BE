import express from 'express';
import DetailController from '../app/controllers/DetailController.js';
const DetailRouters = express.Router();

DetailRouters.get('/:slug', DetailController.index);

export default DetailRouters;
