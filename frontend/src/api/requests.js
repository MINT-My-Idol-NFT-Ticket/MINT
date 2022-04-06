import { axiosInstance } from './index.js'
export const BASE_URL = process.env.REACT_APP_BASE_URL

export const postRequest = async (url, data) => {
  const response = await axiosInstance.post(url, data)

  return response
}

export const getRequest = async (url, params = null) => {
  let parameter = ''
  if (params !== null) {
    parameter = '?'
    Object.keys(params).forEach(key => (parameter += `${key}=${params[key]}&`))
  }
  const response = await axiosInstance.get(url + parameter)

  return response
}

export const putRequest = async (url, params = null) => {
  let parameter = ''

  if (params !== null) {
    parameter = '?'
    Object.keys(params).forEach(key => (parameter += `${key}=${params[key]}&`))
  }

  const response = await axiosInstance.put(url + parameter)

  return response
}
