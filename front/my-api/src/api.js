import axios from 'axios'
import { getToken } from './storage'


let apiURL = 'http://localhost:4000'

let instance = axios.create({
    baseURL: apiURL,
    withCredentials: true
     
})

instance.interceptors.request.use(config => {
  console.log(config)
 console.log(getToken())

 config.headers.authorization = `bearer ${getToken()}`

  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})

export default instance