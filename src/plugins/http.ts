import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_HOST

class HttpService {
  private axiosInstance: AxiosInstance

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 5000, // Timeout opcional
    })

    // Interceptores de respuesta para manejo de errores
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('Error en la petición:', error.response || error.message)
        return Promise.reject(error)
      },
    )
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, config)
    return response.data
  }

  async post<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config)
    return response.data
  }

  async put<T>(url: string, data: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, config)
    return response.data
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url, config)
    return response.data
  }
}

const httpService = new HttpService(BACKEND_URL)

export default httpService
