import express, { Request, Response } from 'express';
import { buildRouteUrl } from '../common/ServerUtils';
import ResponseObject from '../classes/ResponseObject';
import ServerApi from '../enums/ServerApi';
import ApiService from '../services/ApiService';


const router = express.Router();

router.get(buildRouteUrl(ServerApi.FETCH_CATEGORIES), async(req: Request, res: Response) => {
  const { search, page } = req.query;

  const result = await ApiService.fetchCategories(search, page);

  ResponseObject.success(res, result);
});

router.get(buildRouteUrl(ServerApi.FETCH_DATA_FOR_CATEGORY), async(req: Request, res: Response) => {
  const { name, page } = req.query;

  const result = await ApiService.fetchDataForCategory(name, page);

  ResponseObject.success(res, result);
});

router.get(buildRouteUrl(ServerApi.SEARCH_DATA_FOR_CATEGORY), async(req: Request, res: Response) => {
  const { name, search } = req.query;

  const result = await ApiService.searchDataForCategory(name, search);

  ResponseObject.success(res, result);
});

export default router;
