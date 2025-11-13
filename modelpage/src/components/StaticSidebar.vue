<template>
  <!-- 增加折叠状态类名和文字隐藏逻辑 -->
  <div class="static-sidebar" :class="{ 'collapsed': collapsed }">
    <!-- 顶部Logo区域：大图片Logo（1.png） -->
    <div class="sidebar-header">
      <div class="logo">
        <img src="@/assets/images/1.png" alt="Lim管理系统" class="logo-img">
        <!-- 增加文字过渡类名 text-transition -->
        <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">Lim管理系统</span>
      </div>
    </div>

    <!-- 导航菜单列表 -->
    <ul class="menu-list">
      <!-- 首页 -->
      <li class="menu-item active">
        <el-icon class="icon" :style="{ display: 'inline-flex' }"><Home /></el-icon>
        <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">首页</span>
      </li>

      <!-- 系统管理 -->
      <li class="menu-group" @click="toggleSubmenu('system')">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><Tools /></el-icon>
          <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">系统管理</span>
          <!-- 箭头旋转过渡 -->
          <el-icon class="arrow-icon" :class="{ 'rotate': openSubmenu === 'system' }">
            <ArrowDown />
          </el-icon>
        </div>
        <!-- 子菜单展开/折叠过渡 -->
        <transition name="submenu-fade">
          <ul class="submenu" v-if="openSubmenu === 'system'">
            <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><User /></el-icon><span>用户管理</span></li>
            <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><UserFilled /></el-icon><span>角色管理</span></li>
            <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Menu /></el-icon><span>菜单管理</span></li>
            <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><OfficeBuilding /></el-icon><span>部门管理</span></li>
            <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Postcard /></el-icon><span>岗位管理</span></li>
            <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><CollectionTag /></el-icon><span>字典管理</span></li>
            <li><el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Message /></el-icon><span>通知公告</span></li>
          </ul>
        </transition>
      </li>

      <!-- 日志管理 -->
      <li class="menu-group" @click="toggleSubmenu('log')">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><Notebook /></el-icon>
          <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">日志管理</span>
          <el-icon class="arrow-icon" :class="{ 'rotate': openSubmenu === 'log' }">
            <ArrowDown />
          </el-icon>
        </div>
        <transition name="submenu-fade">
          <ul class="submenu" v-if="openSubmenu === 'log'">
            <!-- 可添加日志管理子菜单内容 -->
            <li><span>操作日志</span></li>
            <li><span>登录日志</span></li>
          </ul>
        </transition>
      </li>

      <!-- 系统监控 -->
      <li class="menu-group" @click="toggleSubmenu('monitor')">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><VideoCamera /></el-icon>
          <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">系统监控</span>
          <el-icon class="arrow-icon" :class="{ 'rotate': openSubmenu === 'monitor' }">
            <ArrowDown />
          </el-icon>
        </div>
        <transition name="submenu-fade">
          <ul class="submenu" v-if="openSubmenu === 'monitor'">
            <!-- 可添加系统监控子菜单内容 -->
            <li><span>服务器监控</span></li>
            <li><span>接口监控</span></li>
          </ul>
        </transition>
      </li>

      <!-- 系统工具 -->
      <li class="menu-group" @click="toggleSubmenu('tool')">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><Box /></el-icon>
          <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">系统工具</span>
          <el-icon class="arrow-icon" :class="{ 'rotate': openSubmenu === 'tool' }">
            <ArrowDown />
          </el-icon>
        </div>
        <transition name="submenu-fade">
          <ul class="submenu" v-if="openSubmenu === 'tool'">
            <!-- 可添加系统工具子菜单内容 -->
            <li><span>可新增内容</span></li>
            <li><span>可新增内容</span></li>
          </ul>
        </transition>
      </li>

      <li class="menu-item" style="margin-top: auto;">
        <el-icon class="icon" :style="{ display: 'inline-flex' }"><Link /></el-icon>
        <span class="badge" :class="{ 'collapsed-text': collapsed, 'text-transition': true }">https://github.com/lplly/</span>
      </li>
    </ul>
  </div>
</template>

<script>

import {
  Home, Tools, User, UserFilled, Menu, OfficeBuilding,
  Postcard, CollectionTag, Message, Notebook,
  VideoCamera, Box, Link, ArrowDown
} from '@element-plus/icons-vue'

export default {
  name: 'static-sidebar',
  components: {
    Home, Tools, User, UserFilled, Menu, OfficeBuilding,
    Postcard, CollectionTag, Message, Notebook,
    VideoCamera, Box, Link, ArrowDown
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openSubmenu: '' // 记录当前展开的子菜单（空=都关闭，值=对应菜单key）
    }
  },
  methods: {
    // 切换子菜单展开/折叠
    toggleSubmenu(key) {
      this.openSubmenu = this.openSubmenu === key ? '' : key
    }
  }
}
</script>

<style scoped>
/* 侧边栏容器 */
.static-sidebar {
  width: 210px;
  height: 100%; 
  background-color: #3e90dd;
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.3s ease;
}

/* 侧边栏折叠状态 */
.static-sidebar.collapsed {
  width: 60px;
}

/* 文字过渡核心样式 */
.text-transition {
  white-space: nowrap; /* 防止文字换行错位 */
  transition: all 0.3s ease; 
  opacity: 1; 
  transform: translateX(0); 
  max-width: 150px; /* 限制最大宽度，避免溢出 */
  overflow: hidden;
  text-overflow: ellipsis;
}


.collapsed-text {
  opacity: 0;
  transform: translateX(-10px); 
  max-width: 0; 
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
  width: 100%; 
  gap: 8px; 
}

.logo-img {
  height: 40px; 
  max-width: 120px; 
  object-fit: contain; 
  vertical-align: middle; 
  transition: all 0.3s ease; 
}


.static-sidebar.collapsed .logo-img {
  height: 34px;
}

/* Logo文字 */
.sidebar-header .logo span {
  font-size: 16px;
  font-weight: 500;
}

/* 图标通用样式 */
.icon {
  width: 20px !important;
  height: 20px !important;
  margin-right: 8px;
  color: #075196 !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

/* 折叠时图标居中 */
.static-sidebar.collapsed .icon {
  margin-right: 0;
}

/* 子菜单图标样式 */
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

/* 滚动条美化 */
.menu-list::-webkit-scrollbar {
  width: 4px;
}

.menu-list::-webkit-scrollbar-thumb {
  background: #075196;
  border-radius: 2px;
}

/* 菜单项通用样式 */
.menu-item, .menu-group {
  margin: 2px 0;
  cursor: pointer;
  width: 100%;
}

/* 菜单组点击区域占满 */
.menu-group {
  display: flex;
  flex-direction: column;
}

/* 菜单项hover效果 */
.menu-item:hover {
  background-color: rgba(47, 88, 141, 0.959);
}
.menu-group:hover .group-title {
  background-color: rgba(47, 88, 141, 0.959);
}

/* 单个菜单项 */
.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  transition: all 0.3s;
}

/* 折叠时菜单项内边距调整 */
.static-sidebar.collapsed .menu-item {
  padding: 12px 15px;
  justify-content: center;
}

/* 选中项全区域紫色 */
.menu-item.active {
  background-color: #8a05f7b6 !important;
  color: #fff !important;
  width: 100%;
  padding: 12px 20px;
  margin: 2px 0;
}

/* 折叠时选中项内边距调整 */
.static-sidebar.collapsed .menu-item.active {
  padding: 12px 15px;
}

/* 子菜单选中项 */
.submenu li.active {
  background-color: #8a05f7b6 !important;
  color: #fff !important;
}

/* 带下级的菜单组 */
.menu-group .group-title {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  transition: all 0.3s;
}

/* 折叠时菜单组标题内边距调整 */
.static-sidebar.collapsed .group-title {
  padding: 12px 15px;
  justify-content: center;
}

/* 父级菜单组选中状态 */
.menu-group.active .group-title {
  background-color: #8a05f7b6 !important;
  color: #fff !important;
}

/* 底部的徽章 */
.menu-item .badge {
  margin-left: auto;
  font-size: 12px;
  color: #fff !important;
  background: transparent;
}


.static-sidebar.collapsed .badge {
  margin-left: 0;
}

/* 下拉箭头样式 + 旋转过渡 */
.arrow-icon {
  width: 16px !important;
  height: 16px !important;
  margin-left: auto;
  color: #fff !important;
  display: inline-flex !important;
  transition: transform 0.3s ease; 
}

/* 折叠时隐藏箭头 */
.static-sidebar.collapsed .arrow-icon {
  display: none !important;
}

/* 箭头旋转效果） */
.arrow-icon.rotate {
  transform: rotate(180deg);
}

/* 子菜单 */
.submenu {
  list-style: none;
  background-color: #000c17;
  padding-left: 40px;
  margin: 0;
  transition: all 0.3s ease; 
}

/* 折叠时隐藏子菜单） */
.static-sidebar.collapsed .submenu {
  display: none;
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

/* 子菜单展开/折叠过渡动画 */
.submenu-fade-enter-from,
.submenu-fade-leave-to {
  height: 0 !important;
  opacity: 0;
  overflow: hidden;
}
.submenu-fade-enter-active,
.submenu-fade-leave-active {
  transition: all 0.3s ease; 
}
.submenu-fade-enter-to,
.submenu-fade-leave-from {
  height: auto;
  opacity: 1;
}

.notebook-icon {
  width: 20px !important;
  height: 20px !important;
  color: #075196 !important; 
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

/* 确保所有一级菜单图标样式统一生效 */
.group-title .icon {
  width: 20px !important;
  height: 20px !important;
  display: inline-flex !important;
}
</style>