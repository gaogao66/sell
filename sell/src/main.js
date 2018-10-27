// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods.vue';
import seller from './components/seller/seller.vue';
import ratings from './components/ratings/ratings.vue';
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);// 注册Vueresource
Vue.config.productionTip = false;

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: {App, goods},
//   template: '<App/>'
// });
// let app = Vue.extend(App);

let router = new VueRouter({
  routes: [{
    path: '/goods', component: goods
  },
  {
    path: '/ratings', component: ratings
  },
  {
    path: '/seller', component: seller
  }
  ],
  linkActiveClass: 'active'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

// let routes = [
//   {path: '/goods', components: goods},
//   {path: '/ratings', components: ratings},
//   {path: '/seller', components: seller}
// ];
// let router = new VueRouter({
//   routes
// });
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });
