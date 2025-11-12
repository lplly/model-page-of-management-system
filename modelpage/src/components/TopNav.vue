<template>
  <header class="top-nav">
    <!-- 菜单按钮 -->
    <el-icon class="menu-btn" @click="handleToggleSidebar">
      <Menu />
    </el-icon>
    
    <!-- 标题 -->
    <div class="nav-title">首页</div>
    
    <!-- 右侧功能区 -->
    <div class="nav-actions">
      <el-icon class="action-icon" title="搜索">
        <Search />
      </el-icon>
      <el-icon class="action-icon" title="刷新">
        <Refresh />
      </el-icon>
      <el-icon class="action-icon" title="帮助">
        <QuestionFilled />
      </el-icon>
      <el-icon class="action-icon" title="布局">
        <Grid />
      </el-icon>
      <el-icon class="action-icon" title="主题切换">
        <Moon />
      </el-icon>
      
      <!-- 用户信息 -->
      <div class="user-info">
        <img src="@/assets/images/user-avatar.png" alt="用户头像" class="avatar">
        <span class="username">Lim</span>
        <el-icon class="arrow-icon">
          <CaretDown />
        </el-icon>
      </div>
      
      <el-icon class="action-icon" title="更多">
        <More />
      </el-icon>
    </div>
  </header>
</template>

<script>
// 引入需要的图标
import { Menu, Search, Refresh, QuestionFilled, Grid, Moon, CaretDown, More } from '@element-plus/icons-vue'

export default {
  name: 'top-nav',
  components: {
    Menu, Search, Refresh, QuestionFilled, Grid, Moon, CaretDown, More
  },
  // 用emits选项声明事件
  emits: ['toggle-sidebar'],
  methods: {
    handleToggleSidebar() {
      this.$emit('toggle-sidebar') // 触发事件
    }
  }
}
</script>

<style scoped>
.top-nav {
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
  position: relative;
}

.menu-btn {
  width: 24px;
  height: 24px;
  color: #666;
  cursor: pointer;
  margin-right: 15px;
  transition: color 0.2s;
}
.menu-btn:hover {
  color: #1890ff;
}

.nav-title {
  font-size: 16px;
  color: #1890ff;
  font-weight: 500;
}

.nav-actions {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 15px;
}

.action-icon {
  width: 20px;
  height: 20px;
  color: #666;
  cursor: pointer;
  transition: color 0.2s;
}
.action-icon:hover {
  color: #1890ff;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 0 5px;
  border-radius: 4px;
  height: 36px;
  transition: background-color 0.2s;
}
.user-info:hover {
  background-color: #f5f7fa;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #eee;
}

.username {
  font-size: 14px;
  color: #333;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  color: #999;
}
</style>