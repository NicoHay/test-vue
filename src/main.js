import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import chart from 'chart.js';
import axios from "axios";

Vue.config.productionTip = false

new Vue({
  vuetify,
  axios,
  chart,
  render: h => h(App)
}).$mount('#app')
