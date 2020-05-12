import axios from 'axios'
import config from '../config/config'

let host
const _http = window.location.protocol
if (!host && location.host.includes('aipm.cn')) {
  if (location.host.includes('1816')) {
    host = `${_http}//${config.testBaseURL}/`
  } else {
    host = `${_http}//${config.prodBaseURL}/`
  }
} else if (!host) {
  host = `${_http}//127.0.0.1:8080/`
}

const service = axios.create({
  baseURL: host,
  timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 这里是每个请求的设置，比如每个请求都携带一个token。
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  (error) => {
    // console.log('请求失败:' + error)
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 这个地方的code自己与后台约定(可以根据状态码，设置自己要提示的信息)
    // console.log('**************…………………………***********' + JSON.stringify(res))
    return res
  },
  (error) => {
    // console.log('响应失败:' + error)
    return Promise.reject(error)
  }
)
export default service
