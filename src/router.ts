import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import OnkoForm from './views/OnkoForm.vue';

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
      props: { type: 'Doctor' },
    },
    {
      path: '/patient-login',
      name: 'patient login',
      component: Login,
      props: { type: 'Patient' },
    },
    {
      path: '/patient',
      name: 'Patient',
      component: OnkoForm,
      props: true,
    },
  ],
});
