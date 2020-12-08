import express from 'express';
import { buildRouteUrl } from '../common/ServerUtils.mjs';
import { AppPages } from '../common/Const.mjs';


const router = express.Router();

router.put(buildRouteUrl(AppPages.index), async(req, res) => {
  return {};
});

export default router;