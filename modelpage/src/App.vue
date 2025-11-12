<template>
  <!-- 直接使用布局容器组件 -->
  <MainLayout />
</template>

<script setup>
// 引入布局容器组件
import MainLayout from './components/MainLayout.vue'
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
  background-color: #f5f7fa;
  height: 100vh;
  overflow: hidden;
}
</style>