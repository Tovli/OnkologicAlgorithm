import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/doctor-login',
      name: 'doctor login',
      component: Login,
      props: { type: 'doctor' },
    },
    {
      path: '/patient-login',
      name: 'patient login',
      component: Login,
      props: { type: 'patient' },
    },
  ],
});
