import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import axios from 'axios';
// import store from './views/store'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
const token = localStorage.getItem("token");
if(token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  vuetify,
  // store,
  render: h => h(App)
}).$mount('#app')
