import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export default function request<T>(method: string, path: string, params?: T) {
  console.log(apiUrl)
  return axios({
    method: method,
    url: apiUrl + path,
    params: params
  })
}
