import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
const {
  $Toast
} = require('../static/iview/base/index');

Vue.prototype.$Toast = $Toast;
// 利用flyio
// var Fly = require('flyio/dist/npm/wx');
// var fly = new Fly();
// Vue.prototype.$http = fly; // 将fly实例挂在vue原型上
// 利用微信自带方法请求
const {
  myhttp
} = require('./utils/index');
Vue.prototype.$http = myhttp;
