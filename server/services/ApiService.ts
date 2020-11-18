import { getExtRequest } from '../common/ServerUtils';
import Const from '../enums/Const';


export default class ApiService {
  static async fetchCategories(search: string, page: string) {
    return await getExtRequest(Const.API_URL, { search, page });
  }

  static async fetchDataForCategory(category: string, page: number) {
    return await getExtRequest(`${Const.API_URL}${category}/${page ? '?page=' + page : ''}`);
  }

  static async searchDataForCategory(category: string, search: string) {
    return await getExtRequest(`${Const.API_URL}${category}/?search=${search}`);
  }
}