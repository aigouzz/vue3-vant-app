
// import axios from '../utils/axios'
import { homeData } from '../utils/data'

export function getHome() {
  return Promise.resolve(homeData);
  //return axios.get('/index-infos');
}

