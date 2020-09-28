import Vue from 'vue'
import VueRouter from 'vue-router'
import Student_home from '../views/Student_home.vue'
import {Auth} from '@/Services'
Vue.use(VueRouter)

  const routes = [
    // Authentification
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
    // Student
  {
    path: '/student',
    name: 'Student home',
    component: Student_home,
    beforeEnter: (to, from, next) => {
      const user = Auth.getUser();
      if(user.authorized == 2){
        next('/company');
        return
      }else{
      next()
      }
    }
  },
  {
    path: '/ad/:id',
    name: 'Student full ad',
    component: () => import('../views/Student_add.vue')
  },
  {
    path: '/setup',
    name: 'Student setup profile',
    component: () => import('../views/Setup_profile.vue')
  },
  // Company
  {
    path: '/company',
    name: 'Company-home',
    component: () => import('../views/Company-home.vue'),
    beforeEnter: (to, from, next) => {
      const user = Auth.getUser();
      if(user.authorized == 1){
        next('/student');
        return
      }else{
      next()
      }
    }
  },

  {
    path: '/company-profile-question',
    name: 'Company-profile-question',
    component: () => import('../views/Company-profile-question.vue')
  },
  {
    path: '/create-add',
    name: 'Create-add',
    component: () => import('../views/Create-add.vue')
  },
  {
    path: '/preview-add',
    name: 'Preview-add',
    component: () => import('../views/Preview-add.vue')
  },
  {
    path: '/candidate-overview',
    name: 'Candidate-overview',
    component: () => import('../views/Candidate-overview.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach( (to, from, next) =>{
  const publicPages = ["/login", "/signup"]
  const loginNeccesary = !publicPages.includes(to.path);
  const user = Auth.getUser();

  if(!user && loginNeccesary){
    next('/login');
    return
  }
  next()
})

export default router
