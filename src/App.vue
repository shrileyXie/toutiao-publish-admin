<template>
  <!-- 入口节点 -->
  <div id="app">
    <!-- 路由出口 -->
    <router-view/>
  </div>
</template>

<!-- script脚本 -->
<script>
export default {
  name: 'App',
  data () {
    return {
      num: 6
    }
  },
  methods: {},
  created () {}
}
</script>

<style lang="less"></style>
