import axios from "axios"
import { BASE_URL , TIMEOUT } from "./config"
class LzsRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
          baseURL,
          timeout
        })
    
        this.instance.interceptors.response.use((res) => {
          return res.data
        }, err => {
          return err
        })
      }
    
      request(config) {
        return this.instance.request(config)
      }
    
      get(config) {
        console.log('333333333333333333333333333')
        return this.request({ ...config, method: "get" })
      }
    
      post(config) {
        return this.request({ ...config, method: "post" })
      }
    }
    
    
    // eslint-disable-next-line import/no-anonymous-default-export
    export default new LzsRequest(BASE_URL, TIMEOUT)