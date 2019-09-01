import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store'
// import firebase from 'firebase';

Vue.config.productionTip = false;

// Initialize Firebase
// var config = {
//   apiKey: '',
//   authDomain: 'vue-auth-firebase-test.firebaseapp.com',
//   databaseURL: 'https://vue-auth-firebase-test.firebaseio.com',
//   projectId: 'vue-auth-firebase-test',
//   storageBucket: 'vue-auth-firebase-test.appspot.com',
//   messagingSenderId: ''
// };
// firebase.initializeApp(config);

// let app = '';
// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     app = new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount('#app');
//   }
// });

Vue.prototype.$http = Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})