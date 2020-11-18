import express, { Request, Response } from 'express';
import { buildRouteUrl } from '../common/ServerUtils';
import ResponseObject from '../classes/ResponseObject';
import ServerApi from '../enums/ServerApi';
import FilmService from '../services/FilmService';


const router = express.Router();

router.get(buildRouteUrl(ServerApi.FETCH_CATEGORIES), async(req: Request, res: Response) => {
  const { search, page } = req.query;

  const result = await FilmService.fetchCategories(search, page);

  ResponseObject.success(res, result);
});

export default router;
