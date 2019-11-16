// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue";
import BootstrapVue from "bootstrap-vue";
// import cors from 'cors';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
// Vue.use(cors());
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
