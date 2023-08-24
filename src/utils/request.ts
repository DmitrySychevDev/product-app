import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL

export default function request<T, RT>(
  method: string,
  path: string,
  params?: T
): Promise<RT | any> {
  const requestPromise: Promise<RT | any> = new Promise((resolve, rejects) => {
    axios({
      method: method,
      url: apiUrl + path,
      params: params
    })
      .then((req) => {
        resolve(req.data)
      })
      .catch((e) => {
        rejects(e)
      })
  })
  return requestPromise
}
