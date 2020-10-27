import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 公共样式
import "./assets/css/base.css";
import "./assets/font/iconfont.css"

// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";

// 插件
// cnpm i swiper -S
import "swiper/css/swiper.min.css";
// axios配置
// cnpm install axios -S
import axios from "axios";
// 默认路径配置
axios.defaults.baseURL = "http://127.0.0.1:3000/"
Vue.prototype.apilist = [
  "http://192.168.1.1:3000/",
  "http://192.168.1.2:3000/",
  "http://192.168.1.3:3000/",
]
Vue.prototype.$axios = axios;
// 动画效果
// cnpm install animate.css --save
// cnpm install animate.css@3.7.2 --save
// import "animate.css";
import 'animate.css/animate.css'

Vue.use(vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
