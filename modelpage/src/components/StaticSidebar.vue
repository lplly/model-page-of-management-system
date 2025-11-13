<template>
  <div class="static-sidebar" :class="{ 'collapsed': collapsed }">
    <div class="sidebar-header">
      <div class="logo">
        <img src="@/assets/images/1.png" alt="栗木管理系统" class="logo-img">
        <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">栗木管理系统</span>
      </div>
    </div>

    <ul class="menu-list">
      <li class="menu-item active">
        <el-icon class="icon" :style="{ display: 'inline-flex' }"><House /></el-icon>
        <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">首页</span>
      </li>

      <li class="menu-group" @click="toggleSubmenu('system')">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><Tools /></el-icon>
          <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">系统管理</span>
          <el-icon class="arrow-icon" :class="{ 'rotate': openSubmenus.includes('system') }">
            <ArrowDown />
          </el-icon>
        </div>
        <transition name="submenu-fade">
          <ul class="submenu" v-if="openSubmenus.includes('system')">
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><User /></el-icon>
              <span>用户管理</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><UserFilled /></el-icon>
              <span>角色管理</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Menu /></el-icon>
              <span>菜单管理</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><OfficeBuilding /></el-icon>
              <span>部门管理</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Postcard /></el-icon>
              <span>岗位管理</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><CollectionTag /></el-icon>
              <span>字典管理</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Message /></el-icon>
              <span>通知公告</span>
            </li>

            <li class="submenu-group" @click.stop="toggleSubmenu('log')">
              <div class="submenu-group-title">
                <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Notebook /></el-icon>
                <span>日志管理</span>
                <el-icon class="sub-arrow-icon" :class="{ 'rotate': openSubmenus.includes('log') }">
                  <ArrowDown />
                </el-icon>
              </div>
              <transition name="submenu-fade">
                <ul class="sub-submenu" v-if="openSubmenus.includes('log')">
                  <li class="sub-submenu-item">
                    <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Operation /></el-icon>
                    <span>操作日志</span>
                  </li>
                  <li class="sub-submenu-item">
                    <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Postcard /></el-icon>
                    <span>登录日志</span>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </transition>
      </li>

      <li class="menu-group" @click="toggleSubmenu('monitor')">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><VideoCamera /></el-icon>
          <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">系统监控</span>
          <el-icon class="arrow-icon" :class="{ 'rotate': openSubmenus.includes('monitor') }">
            <ArrowDown />
          </el-icon>
        </div>
        <transition name="submenu-fade">
          <ul class="submenu" v-if="openSubmenus.includes('monitor')">
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Avatar /></el-icon>
              <span>在线用户</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Clock /></el-icon>
              <span>定时任务</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Coordinate /></el-icon>
              <span>数据监控</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Document /></el-icon>
              <span>服务监控</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Monitor /></el-icon>
              <span>缓存监控</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><List /></el-icon>
              <span>缓存列表</span>
            </li>
          </ul>
        </transition>
      </li>

      <li class="menu-group" @click="toggleSubmenu('tool')">
        <div class="group-title">
          <el-icon class="icon" :style="{ display: 'inline-flex' }"><Box /></el-icon>
          <span :class="{ 'collapsed-text': collapsed, 'text-transition': true }">系统工具</span>
          <el-icon class="arrow-icon" :class="{ 'rotate': openSubmenus.includes('tool') }">
            <ArrowDown />
          </el-icon>
        </div>
        <transition name="submenu-fade">
          <ul class="submenu" v-if="openSubmenus.includes('tool')">
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><CopyDocument /></el-icon>
              <span>表单构建</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Edit /></el-icon>
              <span>代码生成</span>
            </li>
            <li class="submenu-item">
              <el-icon class="sub-icon" :style="{ display: 'inline-flex' }"><Expand /></el-icon>
              <span>系统接口</span>
            </li>
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
  House, Tools, User, UserFilled, Menu, OfficeBuilding,
  Postcard, CollectionTag, Message, Notebook, ArrowDown,
  VideoCamera, Box, Link, Clock,
  List, 
  Avatar,
  Coordinate,
  Document,
  Monitor,
  Operation,
  CopyDocument,
  Edit,
  Expand
} from '@element-plus/icons-vue'

export default {
  name: 'static-sidebar',
  components: {
    House, Tools, User, UserFilled, Menu, OfficeBuilding,
    Postcard, CollectionTag, Message, Notebook, ArrowDown,
    VideoCamera, Box, Link, Avatar, Coordinate, List, Clock,
    Document, Monitor, Operation, CopyDocument, Edit, Expand
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openSubmenus: []
    }
  },
  methods: {
    toggleSubmenu(key) {
      if (this.openSubmenus.includes(key)) {
        this.openSubmenus = this.openSubmenus.filter(item => item !== key)
      } else {
        this.openSubmenus.push(key)
      }
    }
  }
}
</script>

<style scoped>
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

.static-sidebar.collapsed {
  width: 60px;
}

.text-transition {
  white-space: nowrap;
  transition: all 0.3s ease; 
  opacity: 1; 
  transform: translateX(0); 
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.collapsed-text {
  opacity: 0;
  transform: translateX(-10px); 
  max-width: 0; 
}

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

.sidebar-header .logo span {
  font-size: 16px;
  font-weight: 500;
}

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

.static-sidebar.collapsed .icon {
  margin-right: 0;
}

.sub-icon {
  width: 16px !important;
  height: 16px !important;
  margin-right: 10px;
  color: #a0a0a0 !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
}

.menu-list {
  flex: 1;
  padding: 10px 0;
  list-style: none;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.menu-list::-webkit-scrollbar {
  width: 4px;
}

.menu-list::-webkit-scrollbar-thumb {
  background: #075196;
  border-radius: 2px;
}

.menu-item, .menu-group {
  margin: 2px 0;
  cursor: pointer;
  width: 100%;
}

.menu-group {
  display: flex;
  flex-direction: column;
}

.menu-item:hover {
  background-color: rgba(47, 88, 141, 0.959);
}
.menu-group:hover .group-title {
  background-color: rgba(47, 88, 141, 0.959);
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  transition: all 0.3s;
}

.static-sidebar.collapsed .menu-item {
  padding: 12px 15px;
  justify-content: center;
}

.menu-item.active {
  background-color:rgba(233, 102, 222, 0.932) !important;
  color: #fff !important;
  width: 100%;
  padding: 12px 20px;
  margin: 2px 0;
}

.static-sidebar.collapsed .menu-item.active {
  padding: 12px 15px;
}

.group-title {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  transition: all 0.3s;
}

.static-sidebar.collapsed .group-title {
  padding: 12px 15px;
  justify-content: center;
}

.menu-group.active .group-title {
  background-color: #8a05f7b6 !important;
  color: #fff !important;
}

.menu-item .badge {
  margin-left: auto;
  font-size: 12px;
  color: #fff !important;
  background: transparent;
}

.static-sidebar.collapsed .badge {
  margin-left: 0;
}

.arrow-icon {
  width: 16px !important;
  height: 16px !important;
  margin-left: auto;
  color: #fff !important;
  display: inline-flex !important;
  transition: transform 0.3s ease; 
}

.static-sidebar.collapsed .arrow-icon,
.static-sidebar.collapsed .sub-arrow-icon {
  display: none !important;
}

.arrow-icon.rotate,
.sub-arrow-icon.rotate {
  transform: rotate(180deg);
}

.submenu {
  list-style: none;
  background-color: #000c17;
  padding-left: 40px;
  margin: 0;
  transition: all 0.3s ease; 
}

.static-sidebar.collapsed .submenu,
.static-sidebar.collapsed .sub-submenu {
  display: none;
}

.submenu-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  color: #a0a0a0;
  transition: all 0.2s ease;
}

.submenu-item:hover {
  color: #1890ff;
  background-color: rgba(6, 227, 243, 0.3);
  padding-left: 25px;
}

.submenu-item.active {
  background-color: #8a05f7b6 !important;
  color: #fff !important;
}

.submenu-group {
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.submenu-group-title {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  color: #a0a0a0;
  transition: all 0.2s ease;
}

.submenu-group-title:hover {
  color: #1890ff;
  background-color: rgba(6, 227, 243, 0.3);
  padding-left: 25px;
}

.sub-arrow-icon {
  width: 14px !important;
  height: 14px !important;
  margin-left: auto;
  color: #a0a0a0 !important;
  display: inline-flex !important;
  transition: transform 0.3s ease;
}

.sub-submenu {
  list-style: none;
  background-color: #0a1420;
  padding-left: 30px;
  margin: 0;
  transition: all 0.3s ease;
}

.sub-submenu-item {
  display: flex;
  align-items: center;
  padding: 8px 20px;
  width: 100%;
  color: #888;
  transition: all 0.2s ease;
}

.sub-submenu-item:hover {
  color: #1890ff;
  background-color: rgba(6, 227, 243, 0.2);
  padding-left: 25px;
}

/* 二级子菜单箭头样式 */
.sub-arrow-icon {
  width: 14px !important;
  height: 14px !important;
  margin-left: auto;
  color: #a0a0a0 !important;
  display: inline-flex !important;
  transition: transform 0.3s ease;
}

/* 二级子菜单容器样式 */
.sub-submenu {
  list-style: none;
  background-color: #0a1420; /* 比一级子菜单深一点，区分层级 */
  padding-left: 30px; /* 比一级子菜单多缩进，层级更清晰 */
  margin: 0;
  transition: all 0.3s ease;
}

/* 二级子菜单项样式 */
.sub-submenu-item {
  display: flex;
  align-items: center;
  padding: 8px 20px;
  width: 100%;
  color: #888;
  transition: all 0.2s ease;
}

/* 二级子菜单项hover效果 */
.sub-submenu-item:hover {
  color: #1890ff;
  background-color: rgba(6, 227, 243, 0.2);
  padding-left: 25px;
}

/* 二级子菜单项选中状态 */
.sub-submenu-item.active {
  background-color: #8a05f799 !important;
  color: #fff !important;
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
</style>