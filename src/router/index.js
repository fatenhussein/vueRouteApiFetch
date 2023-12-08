import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Jobs from '../views/Jobs/Jobs.vue';
import JobDetails from '../views/Jobs/JobDetails.vue';
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about-us', component: About, name: 'About' },
  { path: '/jobs', component: Jobs, name: 'Jobs' },
  { path: '/jobs/:id', component: JobDetails, name: 'JobDetails', props: true },

  //redirect

  {
    path: '/all-jobs',
    redirect: '/jobs',
  },

  //catch all route
  { path: '/:catchAll(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
