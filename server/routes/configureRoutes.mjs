import { buildRouteUrl } from '../common/ServerUtils.mjs';
import PageRoutes from './PageRoutes.mjs';
import { ServerApi, AppPages } from '../common/Const.mjs';
import ApiRoutes from './ApiRoutes.mjs';


const configureRoutes = (server) => {
  server.use((req, res, next) => { console.log(req.path, '-------------------------------------'); next() });

  server.use(buildRouteUrl(AppPages.index), PageRoutes);

  server.use(buildRouteUrl(ServerApi.API), ApiRoutes);
};

export default configureRoutes;