import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载 vant 组件库
import Vant from 'vant'
// 组件库样式
import 'vant/lib/index.css'
// 自动设置 rem 基准值(html字体大小)
import 'amfe-flexible'
// 加载全局样式
import './styles/index.less'
// 全局注册 vant 中的组件
Vue.use(Vant)
Vue.config.productionTip = false
// 创建 vue 跟实例, 将router store配置
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
