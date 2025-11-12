import { createApp } from 'vue'
import App from './App.vue'  // 确保文件名是 App.vue（首字母大写）

// 只保留 Element Plus 核心引入（删除所有图标相关代码）
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建并挂载应用
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')