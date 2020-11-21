<template>
    <el-menu
      class="nav-menu"
      default-active="/"
      background-color="#a6c0fe"
      text-color="#fff"
      active-text-color="#f68084"
      router=""
      >
      <!-- el-menu-item的index不能重复 -->
      <el-menu-item index="/">
        <i class="iconfont iconhome"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="iconfont iconarticle"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="iconfont iconimage"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="iconfont iconpublish"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="iconfont iconzixundianji"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="iconfont iconfensiguanli"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="settings">
        <i class="iconfont iconsetting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  name: 'AppAside',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
  }
}
</script>

<style scoped lang="less">
.nav-menu {
  .iconfont {
    margin-right: 10px;
    padding-left: 5px;
  }
}
</style>
