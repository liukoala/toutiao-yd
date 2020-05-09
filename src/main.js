import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
// 自动设置rem基准值 （html标签字体的大小）
import 'amfe-flexible'

// 加载vant组件库
import Vant from 'vant'

// 加载vant组件库样式
import 'vant/lib/index.css'

// 全局注册vant中的组件
Vue.use(Vant)

Vue.config.productionTip = false
// 创建vue实例将routerstore配值到根实例

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
