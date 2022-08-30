import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import Vant from 'vant' //加载vant核心组件库
import 'vant/lib/index.css' //加载vant全局样式
//加载动态设置rem基准值
import 'amfe-flexible'

Vue.use(Vant);


//加载全局样式
import './styles/index.less'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
