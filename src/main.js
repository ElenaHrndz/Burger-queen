import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import './registerServiceWorker'

import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './components/firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
}).$mount('#app')
