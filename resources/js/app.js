/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');
 import Vue from 'vue'
 
 import App from './App.vue';
 import VueAxios from 'vue-axios';
 import VueRouter from 'vue-router';
 import axios from 'axios';
 import { routes } from './routes';
 
 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */

Vue.component('allclientes-component', require('./components/AllCliente.vue').default);
Vue.component('createclientes-component', require('./components/CreateCliente.vue').default);
Vue.component('editcliente-component', require('./components/EditCliente.vue').default);
 
 Vue.use(VueRouter);
 Vue.use(VueAxios, axios);
  
 const router = new VueRouter({
     mode: 'history',
     routes: routes
 });
  
 const app = new Vue({
     el: '#app',
     router: router,
     //render: h => h(App),
 });