<template>
  <div class="aside-logo">
    <img src="https://picsum.photos/40/40" alt="logo" class="logo-img">
    <span class="logo-text">若依管理系统</span>
  </div>
  
  <!-- 导航菜单 -->
  <el-menu
    default-active="1"  <!-- 默认选中第一个菜单 -->
    class="el-menu-vertical"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409EFF"  <!-- 选中项文字颜色 -->
  >
    <!-- 首页 -->
    <el-menu-item index="1">
      <el-icon><Home /></el-icon>  <!-- 图标 -->
      <span>首页</span>
    </el-menu-item>
    
    <!-- 系统管理（带子菜单） -->
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="2-1">用户管理</el-menu-item>
      <el-menu-item index="2-2">角色管理</el-menu-item>
      <el-menu-item index="2-3">菜单管理</el-menu-item>
      <el-menu-item index="2-4">部门管理</el-menu-item>
    </el-sub-menu>
    
    <!-- 其他菜单（按截图补充） -->
    <el-menu-item index="3">
      <el-icon><Document /></el-icon>
      <span>日志管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Monitor /></el-icon>
      <span>系统监控</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
// 引入 Element 图标
import { Home, Setting, Document, Monitor } from '@element-plus/icons-vue'
</script>

<style scoped>
.aside-logo {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #182431;
}
.logo-img {
  width: 30px;
  height: 30px;
  border-radius: 4px;
}
.logo-text {
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
}
.el-menu-vertical {
  border-right: none; /* 去掉右侧边框 */
}
</style>