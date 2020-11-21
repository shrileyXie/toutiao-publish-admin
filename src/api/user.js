/**
 * 用户相关请求模块
*/

import request from '@/utils/request.js'

// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    // data 用来设置 POST 请求体
    data
  })
}

// 获取用户信息
export const getUserPorfile = () => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/profile',
    // 需要在请求头中授权身份令牌
    headers: {
      // 属性名和值按接口需要设置
      // 属性名： Authorizations
      // 属性值： Bearer (空格)token数据 (登录成功后后端的Authorization)
      // 这是一个写死的正确的令牌
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzczNzYyNjUsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.Xuag47d1WeL7uxVi-UcWJlLOnZVDjRLKk9aLf8tlyaU'
    }
  })
}

// // 修改用户信息
// export const updateuserInfo = () => {

// }
