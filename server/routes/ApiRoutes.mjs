import express from 'express';
import { buildRouteUrl } from '../common/ServerUtils.mjs';
import ResponseObject from '../classes/ResponseObject.mjs';
import { ServerApi } from '../common/Const.mjs';
import ApiService from '../services/ApiService.mjs';


const router = express.Router();

router.get(buildRouteUrl(ServerApi.FETCH_CATEGORIES), async(req, res) => {
  const { search, page } = req.query;

  const result = await ApiService.fetchCategories(search, page);

  ResponseObject.success(res, result);
});

router.get(buildRouteUrl(ServerApi.FETCH_DATA_FOR_CATEGORY), async(req, res) => {
  const { name, page } = req.query;

  const result = await ApiService.fetchDataForCategory(name, page);

  ResponseObject.success(res, result);
});

router.get(buildRouteUrl(ServerApi.SEARCH_DATA_FOR_CATEGORY), async(req, res) => {
  const { name, search } = req.query;

  const result = await ApiService.searchDataForCategory(name, search);

  ResponseObject.success(res, result);
});

router.get(buildRouteUrl(ServerApi.FETCH_DATA_FOR_ITEM), async(req, res) => {
  const { name, category } = req.query;

  const result = await ApiService.fetchDataForItem(category, name);

  ResponseObject.success(res, result);
});

export default router;
