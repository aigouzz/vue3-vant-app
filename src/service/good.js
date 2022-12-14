import axios from '../utils/axios'
import { categoryData } from '../utils/data'

export function getDetail(id) {
  return axios.get(`/goods/detail/${id}`);
}

export function getCategory() {
  return categoryData;
  // return axios.get('/categories');
}

export function search(params) {
  return axios.get('/search', { params });
}

