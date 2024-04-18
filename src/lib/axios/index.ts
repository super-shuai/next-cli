import axios from 'axios'
import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 10000,
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID)
    console.log(process.env.ANALYTICS_ID)
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  (error: AxiosError) => {
    if (error && error.response) {
    }
    return Promise.reject(error)
  }
)

export default instance
