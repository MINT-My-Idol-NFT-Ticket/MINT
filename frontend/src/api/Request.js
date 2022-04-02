import { axiosInstance } from './index.js'

export const BASE_URL = 'http://j6b108.p.ssafy.io:9090/'
// const BASE_URL = 'http://localhost:8080/'

export const postRequest = async (url, data) => {
  const response = await axiosInstance.post(url, data)

  return response
}

export const getRequest = async (url, params = null) => {
  let parameter = ''

  if (params !== null) {
    parameter = '?'
    Object.keys(params).forEach(key => (parameter += `${key}=${params[key]}`))
  }

  const response = await axiosInstance.get(BASE_URL + url + parameter)

  return response
}
