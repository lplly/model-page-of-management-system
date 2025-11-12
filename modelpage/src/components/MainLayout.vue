<template>
  <div class="app-container">
    <!-- 顶部导航栏：传递折叠事件 -->
    <TopNav @toggle-sidebar="toggleSidebar" />
    
    <!-- 主内容区：侧边栏 + 页面内容 -->
    <div class="main-content">
      <!-- 你的侧边栏：传递折叠状态 -->
      <StaticSidebar :collapsed="sidebarCollapsed" />
      
      <!-- 页面主内容（占位） -->
      <div class="page-content">
        <h2 style="color: #333; margin-bottom: 20px;">欢迎使用 Lim管理系统</h2>
        <div style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          这里是系统主内容区域，可根据需求填充具体功能页面（如数据统计、表单、列表等）
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 引入两个独立组件
import TopNav from './TopNav.vue'
import StaticSidebar from './StaticSidebar.vue'
import { ref } from 'vue'

// 控制侧边栏折叠状态
const sidebarCollapsed = ref(false)

// 切换折叠/展开
const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}
</script>

<style scoped>
/* 整体容器 */
.app-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 主内容区 */
.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* 页面内容区 */
.page-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
  overflow-y: auto;
}
</style>