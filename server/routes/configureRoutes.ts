import { Express } from 'express';
import { buildRouteUrl } from '../common/ServerUtils';
import ServerApi from '../enums/ServerApi';
import PageRoutes from './PageRoutes';
import AppRoutes from '../enums/AppRoutes';
import ApiRoutes from './ApiRoutes';


const configureRoutes = (server: Express) => {
  server.use((req, res, next) => { console.log(req.path, '-------------------------------------'); next() });

  server.use(buildRouteUrl(AppRoutes.index), PageRoutes);

  server.use(buildRouteUrl(ServerApi.API), ApiRoutes);
};

export default configureRoutes;