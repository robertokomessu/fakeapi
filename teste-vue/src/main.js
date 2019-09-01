import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store'
// import firebase from 'firebase';

Vue.config.productionTip = false;

// Initialize Firebase
// var config = {
//   apiKey: 'AIzaSyC8q3jql-ZXK3iprsoIFZ1NnYRgMmeTAIw',
//   authDomain: 'vue-auth-firebase-7d733.firebaseapp.com',
//   databaseURL: 'https://vue-auth-firebase-7d733.firebaseio.com',
//   projectId: 'vue-auth-firebase-7d733',
//   storageBucket: 'vue-auth-firebase-7d733.appspot.com',
//   messagingSenderId: '93229610542'
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