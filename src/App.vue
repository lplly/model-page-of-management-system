<template>
  <el-container style="height: 100vh;">
    <!-- 左侧导航栏 -->
    <el-aside width="200px" class="aside">
      <Aside />
    </el-aside>
    
    <el-container>
      <!-- 顶部操作栏 -->
      <el-header class="header">
        <Header />
      </el-header>
      
      <!-- 主内容区 -->
      <el-main class="main">
        <MainContent />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import MainContent from './components/MainContent.vue'
</script>

<style>
/* 全局样式：清除默认边距，设置高度 */
* {
  margin: 0;
  padding: 0;
}
.el-container {
  height: 100vh; /* 占满整个屏幕高度 */
}
.aside {
  background-color: #001529; /* 左侧深色背景 */
  color: white;
}
.header {
  background-color: white;
  border-bottom: 1px solid #eee; /* 底部分隔线 */
  padding: 0 20px; /* 左右内边距 */
}
.main {
  padding: 20px; /* 内容区内边距 */
  background-color: #f5f5f5; /* 浅灰背景 */
}
</style>