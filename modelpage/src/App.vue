<template>
  <div id="app">
    <!-- 只展示静态导航栏 -->
    <StaticSidebar />
  </div>
</template>

<script>
import StaticSidebar from './components/StaticSidebar.vue'

export default {
  components: {
    StaticSidebar
  }
}
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Microsoft YaHei", sans-serif;
}
</style>