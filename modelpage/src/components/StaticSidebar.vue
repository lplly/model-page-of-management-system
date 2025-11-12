<template>
  <!-- 增加折叠状态类名和文字隐藏逻辑 -->
  <div class="static-sidebar" :class="{ 'collapsed': collapsed }">
    <!-- 顶部Logo区域：大图片Logo（1.png） -->
    <div class="sidebar-header">
      <div class="logo">
        <img src="@/assets/images/1.png" alt="Lim管理系统" class="logo-img">
        <span :class="{ 'hidden': collapsed }">Lim管理系统</span>
      </div>
    </div>

    <!-- 导航菜单列表：保持你的结构 -->
    <ul class="menu-list">
      <!-- 首页（当前选中状态） -->
      <li class="menu-item active">
        <el-icon class="icon" :style="{ display: 'inline-flex' }"><Home /></el-icon>
        <span :class="{ 'hidden': collapsed }">首页</span>
      </li>

      <!-- 系统管理（带下级菜单） -->
      <li class="menu-group">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><Tools /></el-icon>
          <span :class="{ 'hidden': collapsed }">系统管理</span>
          <el-icon class="arrow-icon"><ArrowDown /></el-icon>
        </div>
        <ul class="submenu">
          <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><User /></el-icon><span>用户管理</span></li>
          <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><UserFilled /></el-icon><span>角色管理</span></li>
          <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Menu /></el-icon><span>菜单管理</span></li>
          <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><OfficeBuilding /></el-icon><span>部门管理</span></li>
          <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Postcard /></el-icon><span>岗位管理</span></li>
          <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><CollectionTag /></el-icon><span>字典管理</span></li>
          <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Message /></el-icon><span>通知公告</span></li>
        </ul>
      </li>

      <!-- 日志管理 -->
      <li class="menu-group">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><Notebook2 /></el-icon>
          <span :class="{ 'hidden': collapsed }">日志管理</span>
          <el-icon class="arrow-icon"><ArrowDown /></el-icon>
        </div>
      </li>

      <!-- 系统监控 -->
      <li class="menu-group">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><VideoCamera /></el-icon>
          <span :class="{ 'hidden': collapsed }">系统监控</span>
          <el-icon class="arrow-icon"><ArrowDown /></el-icon>
        </div>
      </li>

      <!-- 系统工具 -->
      <li class="menu-group">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><Box /></el-icon>
          <span :class="{ 'hidden': collapsed }">系统工具</span>
          <el-icon class="arrow-icon"><ArrowDown /></el-icon>
        </div>
      </li>

      <li class="menu-item" style="margin-top: auto;">
        <el-icon class="icon" :style="{ display: 'inline-flex' }"><Link /></el-icon>
        <span class="badge" :class="{ 'hidden': collapsed }">https://github.com/lplly/</span>
      </li>
    </ul>
  </div>
</template>

<script>
// 确保只引入使用过的图标
import {
  Home, Tools, User, UserFilled, Menu, OfficeBuilding,
  Postcard, CollectionTag, Message, Notebook2,
  VideoCamera, Box, Link, ArrowDown
} from '@element-plus/icons-vue'

export default {
  name: 'static-sidebar',
  components: {
    Home, Tools, User, UserFilled, Menu, OfficeBuilding,
    Postcard, CollectionTag, Message, Notebook2,
    VideoCamera, Box, Link, ArrowDown
  },
  // 新增：接收父组件传递的折叠状态
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
/* 侧边栏容器：保持原有蓝色背景 */
.static-sidebar {
  width: 210px;
  height: 100%; /* 改为100%，适配布局容器高度 */
  background-color: #3e90dd;
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s; /* 增加折叠过渡动画 */
}

/* 新增：侧边栏折叠状态 */
.static-sidebar.collapsed {
  width: 60px;
}

/* 新增：折叠时隐藏文字 */
.hidden {
  display: none !important;
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
  width: 100%; /* 确保占满宽度 */
  gap: 8px; /* 图标和文字间距，比margin更灵活 */
}

/* 核心修改：大图片Logo适配（避免拉伸/溢出） */
.logo-img {
  height: 40px; /* 适配Logo区域高度（60px-上下内边距） */
  max-width: 120px; /* 限制最大宽度，避免溢出侧边栏 */
  object-fit: contain; /* 保持图片比例，不拉伸变形 */
  vertical-align: middle; /* 垂直居中 */
}

/* Logo文字：保持原有样式 */
.sidebar-header .logo span {
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap; /* 避免文字换行 */
  overflow: hidden;
  text-overflow: ellipsis; /* 文字过长时显示省略号 */
}

/* 图标通用样式：强制显示 */
.icon {
  width: 20px !important;
  height: 20px !important;
  margin-right: 8px;
  color: #075196 !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
}

/* 子菜单图标样式：同样强制显示 */
.sub-icon {
  width: 16px !important;
  height: 16px !important;
  margin-right: 10px;
  color: #a0a0a0 !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
}

/* 菜单列表容器 */
.menu-list {
  flex: 1;
  padding: 10px 0;
  list-style: none;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

/* 滚动条美化：保持原有青色 */
.menu-list::-webkit-scrollbar {
  width: 4px;
}

.menu-list::-webkit-scrollbar-thumb {
  background: #07c4aa;
  border-radius: 2px;
}

/* 菜单项通用样式：确保占满宽度 */
.menu-item, .menu-group {
  margin: 2px 0;
  cursor: pointer;
  width: 100%;
}

/* 菜单项hover效果：保持你的深蓝色 */
.menu-item:hover {
  background-color: rgba(47, 88, 141, 0.959);
}
.menu-group:hover .group-title {
  background-color: rgba(47, 88, 141, 0.959);
}

/* 单个菜单项（无下级） */
.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  transition: all 0.3s;
}

/* 选中项全区域紫色 */
.menu-item.active {
  background-color: #8a05f7b6 !important;
  color: #fff !important;
  width: 100%;
  padding: 12px 20px;
  margin: 2px 0;
}

/* 子菜单选中项 */
.submenu li.active {
  background-color: #8a05f7b6 !important;
  color: #fff !important;
}

/* 带下级的菜单组：父级标题占满宽度 */
.menu-group .group-title {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
}

/* 父级菜单组选中状态 */
.menu-group.active .group-title {
  background-color: #8a05f7b6 !important;
  color: #fff !important;
}

/* 官网底部的徽章：白色 */
.menu-item .badge {
  margin-left: auto;
  font-size: 12px;
  color: #fff !important;
  background: transparent;
}

/* 下拉箭头样式 */
.arrow-icon {
  width: 16px !important;
  height: 16px !important;
  margin-left: auto;
  color: #fff !important;
  display: inline-flex !important;
}

/* 子菜单：保持原有深色背景和缩进 */
.submenu {
  list-style: none;
  background-color: #000c17;
  padding-left: 40px;
  margin: 0;
}

.submenu li {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
}

.submenu li:hover {
  color: #1890ff;
  background-color: rgba(6, 227, 243, 0.801);
}

.notebook-icon {
  width: 20px !important;
  height: 20px !important;
  color: #075196 !important; /* 与其他图标保持一致的颜色 */
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

/* 确保所有一级菜单图标样式统一生效（补充优先级） */
.group-title .icon {
  width: 20px !important;
  height: 20px !important;
  display: inline-flex !important;
}
</style>