<template>
  <div class="header-container">
    <!-- 左侧：菜单按钮（移动端折叠用） -->
    <el-icon class="menu-btn"><Menu /></el-icon>
    
    <!-- 右侧：功能区 -->
    <div class="header-right">
      <!-- 搜索框 -->
      <el-input
        placeholder="搜索"
        class="search-input"
        prefix-icon="Search"
        size="small"
      ></el-input>
      
      <!-- 图标按钮区 -->
      <div class="header-icons">
        <el-icon class="icon-item"><Bell /></el-icon>  <!-- 通知 -->
        <el-icon class="icon-item"><Help /></el-icon>   <!-- 帮助 -->
        <el-icon class="icon-item"><Setting /></el-icon> <!-- 设置 -->
      </div>
      
      <!-- 用户信息 -->
      <el-dropdown>
        <div class="user-info">
          <img src="https://picsum.photos/40/40" alt="用户头像" class="user-avatar">
          <span class="user-name">若依</span>
          <el-icon class="user-arrow"><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { Menu, Search, Bell, Help, Setting, ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.menu-btn {
  font-size: 18px;
  cursor: pointer;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 20px; /* 元素间距 */
}
.search-input {
  width: 200px;
}
.header-icons {
  display: flex;
  gap: 15px;
}
.icon-item {
  font-size: 18px;
  cursor: pointer;
  color: #666;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}
.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.user-name {
  font-size: 14px;
}
.user-arrow {
  font-size: 14px;
  color: #999;
}
</style>