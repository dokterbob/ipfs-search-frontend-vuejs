import Vue from 'vue';
import Router from 'vue-router';
import Results from '@/pages/results';
import Landing from '@/pages/landing';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/results/',
      name: 'Results',
      component: Results,
    },
  ],
});
