/**
 * 项目的启动入口
*/

// 加载VUE
import Vue from 'vue'
// 加载根组件
import App from './App.vue'
// 加载路由
import router from './router'
// 加载 element 组件库
import ElementUI from 'element-ui'
// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
// 加载全局样式文件
import './styles/index.less'

// 全局注册 element 组件库
Vue.use(ElementUI)

// 关闭生产环境提示
Vue.config.productionTip = false
// 创建 VUE 根实例
new Vue({
  // 把 router 配置到根实例中
  router,
  // 通过 render 方法把 App 根组件渲染到 #app 入口节点
  render: h => h(App)
  // el:'#app'// 等价于$mount('#app')
}).$mount('#app')
