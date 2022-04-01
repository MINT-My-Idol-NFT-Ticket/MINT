import axios from 'axios'

const BASE_URL = 'http://j6b108.p.ssafy.io:9090/'
// const BASE_URL = 'http://localhost:8080/'

export async function postRequest(url, data) {
  return await axios.post(BASE_URL + url, data)
}

export async function getRequest(url, params) {
  return await axios.get(BASE_URL + url + params)
}
