import axios from 'axios'

const BASE_URL = 'http://j6b108.p.ssafy.io:9090/'

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  })

  return axiosInstance
}

export const axiosInstance = createAxiosInstance()
