import { createApp } from 'vue'
import App from './App.vue'  // 确保文件名是 App.vue（首字母大写）

// 引入 Element Plus 和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入所有 Element Plus 图标（因为组件中用到了图标，必须全局注册）
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建 Vue 应用实例
const app = createApp(App)

// 全局注册 Element Plus
app.use(ElementPlus)

// 全局注册所有图标（避免组件中重复引入）
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 挂载到页面
app.mount('#app')