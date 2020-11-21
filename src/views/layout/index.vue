<template>
    <el-container class="layout-container">
        <!-- 侧边导航栏 -->
        <el-aside
          class="aside"
          width="200px"
        >
          <app-aside class="aside-menu" />
        </el-aside>
        <!-- 顶部导航栏 -->
        <el-container>
            <el-header class="header">
              <div>
                <i class="el-icon-s-fold"></i>
                <span>后台管理系统</span>
              </div>
              <el-dropdown>
                <div class="avatar-wrap">
                  <!-- 显示当前登录用户的信息 -->
                  <img class="avatar" :src="user.photo">
                  <span>{{ user.name }}</span>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </div>
                <!-- <span>
                  下拉菜单
                </span> -->
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人设置</el-dropdown-item>
                  <el-dropdown-item>用户退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-header>
            <el-main class="main">
                <!-- 子路由出口 -->
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AppAside from './components/aside'
import { getUserPorfile } from '@/api/user'

export default {
  name: 'LayoutIndex',
  // 组件注册
  components: {
    AppAside
  },
  props: {},
  data () {
    return {
      user: {} // 当前登录用户信息
    }
  },
  computed: {},
  watch: {},
  created () {
    // 组件初始化 请求获取用户资料
    this.loadUserProfile()
  },
  mounted () {},
  methods: {
    // 除了登录接口，其它接口都需要身份令牌才能获取数据
    loadUserProfile () {
      getUserPorfile().then(res => {
        this.user = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="less">
.layout-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.aside {
    background-color: #d3dce6;
    .aside-menu {
      height: 100%;
    }
}
.header {
    background-color: #e9eef3;
    border-bottom: 1px solid #ccc;
    height: 60px;
    // 水平排列
    display: flex;
    // 元素项左右撑开
    justify-content: space-between;
    // 垂直居中
    align-items: center;
}
.main {
    background-color: #e9eef3;
}
.avatar-wrap{
  display: flex;
  align-items: center;
  .avatar {
    width: 40px;
    height: 40px;
    // 圆形
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
