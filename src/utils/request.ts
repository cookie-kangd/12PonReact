import axios from 'axios'
import { message } from 'antd'
import QS from 'qs'

// 固定app
const app_id = 'qtemljejmlpvnnql',
  app_secret = 'WjI1ZjdRUlA3WmQwTHlJeXRMV2xFZz09'

const instance = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    app_id: app_id,
    app_secret: app_secret
  }
})

const httpCode = {
  // 常见状态码
  400: '请求参数错误',
  401: '权限不足，请重新登陆',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}

// 请求拦截器
instance.interceptors.request.use((config: any) => {
  if (config.url.includes('add')) {
    config.headers = { 'Content-Type': 'application/json' } // 请求传输json数据
  }
  if (config.url.includes('export')) {
    config.headers['responseType'] = 'blob' // blob数据
  }
  if (config.url.includes('upload')) {
    config.headers['Content-Type'] = 'multipart/form-data' // 上传
  }
  return config
})

// 响应拦截器
instance.interceptors.response.use(
  (res: any) => {
    if (res.status === 200) {
      return Promise.resolve(res)
    } else {
      message.error('响应超时')
      return Promise.resolve(res)
    }
  },
  (err: any) => {
    if (err.response) {
      const tips =
        err.response.status in httpCode ? httpCode[err.response.status] : err.response.data.message
      message.error(tips)
      if (err.response.status === 401) {
        window.location.href = '/'
      }
      return Promise.reject(err)
    } else {
      message.error('请求超时')
      return Promise.reject('请求超时')
    }
  }
)

// 封装get请求
export const get = (url: any, params: any) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url, params)
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

// 封装post请求
export const post = (url: any, params: any) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, QS.stringify(params, { arrayFormat: 'repeat' }))
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}
