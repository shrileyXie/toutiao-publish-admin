/**
 * 基于 axios 封装的请求模块
 */
// 加载 axios
import axios from 'axios'

// 创建一个 axios 实例 = 复制了一个 axios
// 通过这个实例发请求，处理需要的配置
const request = axios.create({
  // 请求的基础路径
  baseURL: 'http://ttapi.research.itcast.cn'
})

// 请求拦截器

// 响应拦截器

// 导出请求方法
export default request

// 谁要是用谁就加载 request 模块
// import request from 'request.js'
// request.xxx
// request({
//     method: ,
//     url: ''
// })
