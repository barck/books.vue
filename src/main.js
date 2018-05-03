import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueResorce from 'vue-resource'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)
Vue.use(VueResorce);

new Vue({
  el: '#app',
  render: h => h(App)
})
