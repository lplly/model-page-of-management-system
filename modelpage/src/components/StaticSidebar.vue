<template>
  <div class="static-sidebar">
    <!-- 顶部Logo区域 -->
    <div class="sidebar-header">
      <div class="logo">
        <!-- 局部引入的图标组件 -->
        <Leaf class="icon" />
        <span>管理系统</span>
      </div>
    </div>

    <!-- 导航菜单列表 -->
    <ul class="menu-list">
      <!-- 首页（当前选中状态） -->
      <li class="menu-item active">
        <Home class="icon" />
        <span>首页</span>
      </li>

      <!-- 系统管理（带下级菜单） -->
      <li class="menu-group">
        <div class="group-title">
          <Tools class="icon" />
          <span>系统管理</span>
          <ArrowDown class="arrow-icon" /> <!-- 下拉箭头 -->
        </div>
        <!-- 子菜单 -->
        <ul class="submenu">
          <li><User class="sub-icon" /><span>用户管理</span></li>
          <li><UserFilled class="sub-icon" /><span>角色管理</span></li>
          <li><Menu class="sub-icon" /><span>菜单管理</span></li>
          <li><OfficeBuilding class="sub-icon" /><span>部门管理</span></li>
          <li><Postcard class="sub-icon" /><span>岗位管理</span></li>
          <li><CollectionTag class="sub-icon" /><span>字典管理</span></li>
          <li><Setting class="sub-icon" /><span>参数设置</span></li>
        </ul>
      </li>

      <!-- 通知公告 -->
      <li class="menu-item">
        <Message class="icon" />
        <span>通知公告</span>
      </li>

      <!-- 日志管理（带下级菜单） -->
      <li class="menu-group">
        <div class="group-title">
          <Notebook2 class="icon" />
          <span>日志管理</span>
          <ArrowDown class="arrow-icon" />
        </div>
      </li>

      <!-- 系统监控（带下级菜单） -->
      <li class="menu-group">
        <div class="group-title">
          <VideoCamera class="icon" />
          <span>系统监控</span>
          <ArrowDown class="arrow-icon" />
        </div>
      </li>

      <!-- 系统工具（带下级菜单） -->
      <li class="menu-group">
        <div class="group-title">
          <Box class="icon" />
          <span>系统工具</span>
          <ArrowDown class="arrow-icon" />
        </div>
      </li>

      <!--官网 -->
      <li class="menu-item" style="margin-top: auto;"> <!-- 推到最底部 -->
        <Link class="icon" />
        <span>官网</span>
        <span class="badge">vue.ruoyi.vip</span>
      </li>
    </ul>
  </div>
</template>

<script>

import {
  Leaf, Home, Tools, User, UserFilled, Menu, OfficeBuilding,
  Postcard, CollectionTag, Setting, Message, Notebook2,
  VideoCamera, Box, Link, ArrowDown
} from '@element-plus/icons-vue'

export default {
  name: 'static-sidebar', 
  components: {
    
    Leaf, Home, Tools, User, UserFilled, Menu, OfficeBuilding,
    Postcard, CollectionTag, Setting, Message, Notebook2,
    VideoCamera, Box, Link, ArrowDown
  }
}
</script>

<style scoped>

.static-sidebar {
  width: 210px;
  height: 100vh;
  background-color: #001529;
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 顶部Logo区域 */
.sidebar-header {
  padding: 0 15px;
  height: 60px;
  border-bottom: 1px solid #1890ff;
  display: flex;
  align-items: center;
}

.sidebar-header .logo {
  display: flex;
  align-items: center;
}

/* 图标通用样式 */
.icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: #1890ff;
}

.sidebar-header .logo span {
  font-size: 16px;
  font-weight: 500;
}

/* 菜单列表容器 */
.menu-list {
  flex: 1;
  padding: 10px 0;
  list-style: none;
  overflow-y: auto; /* 内容过多时滚动 */
  display: flex;
  flex-direction: column;
}

/* 滚动条美化 */
.menu-list::-webkit-scrollbar {
  width: 4px;
}

.menu-list::-webkit-scrollbar-thumb {
  background: #1890ff;
  border-radius: 2px;
}

/* 菜单项通用样式 */
.menu-item, .menu-group {
  margin: 2px 0;
  cursor: pointer;
}

.menu-item:hover, .menu-group:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 单个菜单项（无下级） */
.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
}

/* 官网底部的徽章 */
.menu-item .badge {
  margin-left: auto;
  font-size: 12px;
  color: #1890ff;
  background: transparent;
}

/* 当前选中的菜单项 */
.menu-item.active {
  background-color: #1890ff;
  color: #fff;
}

/* 带下级的菜单组 */
.menu-group .group-title {
  display: flex;
  align-items: center;
  padding: 12px 20px;
}

/* 下拉箭头样式 */
.arrow-icon {
  width: 16px;
  height: 16px;
  margin-left: auto;
  color: #fff;
}

/* 子菜单 */
.submenu {
  list-style: none;
  background-color: #000c17; /* 比父级深一点的背景 */
  padding-left: 40px; /* 缩进效果 */
}

.submenu li {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

/* 子菜单图标样式 */
.sub-icon {
  width: 16px;
  height: 16px;
  margin-right: 10px;
  color: #a0a0a0; /* 子菜单图标颜色浅一点 */
}

.submenu li:hover {
  color: #1890ff;
  background-color: rgba(255, 255, 255, 0.05);
}
</style>