import { getExtRequest } from '../common/ServerUtils';
import Const from '../enums/Const';


export default class FilmService {
  static async fetchCategories(search: string, page: string) {
    return await getExtRequest(Const.API_URL, { search, page });
  }
}