import { getExtRequest } from '../common/ServerUtils.mjs';
import { Const } from '../common/Const.mjs';


export default class ApiService {
  static async fetchCategories(search, page) {
    return await getExtRequest(Const.API_URL, { search, page });
  }

  static async fetchDataForCategory(category, page) {
    return await getExtRequest(`${Const.API_URL}${category}/${page ? '?page=' + page : ''}`);
  }

  static async searchDataForCategory(category, search) {
    return await getExtRequest(`${Const.API_URL}${category}/?search=${search}`);
  }

  static async fetchDataForItem(category, name) {
    return await getExtRequest(`${Const.API_URL}${category}/?search=${name}`);
  }
}