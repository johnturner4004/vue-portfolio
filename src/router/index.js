import HomeVue from "../views/Home.vue";
import WorkHistory from "../views/WorkHistory.vue";
import EducationVue from "../views/Education.vue"
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeVue
    },
    {
      path: '/work-history',
      name: 'Work History',
      component: WorkHistory
    },
    {
      path: '/education',
      name: 'Education',
      component: EducationVue
    }
  ]
})

export default router;