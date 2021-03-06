import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.prototype.$store = store


// import echarts from 'echarts' //引入echarts
// Vue.prototype.$echarts = echarts //引入组件

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
