// 加载VUE
import Vue from 'vue'
// 加载VueRouter
import VueRouter from 'vue-router'
// 加载登陆组件
// @： 在 VueCLI 创建的项目中表示 src 目录的路径别名
// 好处： 不受当前文件目录的影响
import Login from '@/views/login/'
import Home from '@/views/home/'
import Layout from '@/views/layout/'

// 配置路由
Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    // 配置登陆的路由
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // name: '', // 拥有默认子路由的父路由无需name
    component: Layout,
    children: [
      {
        // 配置首页的路由
        path: '', // path 为空，作为默认子路由
        name: 'home',
        component: Home
      }
    ]
  }
]

// 新建VueRouter的实例
const router = new VueRouter({
  routes
})
// 导出实例
export default router
