import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/NewUserHome.vue'

const routes = [
  {
    path: '/', // NewUserHome
    name: 'Landing',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewUserHome.vue')
  },
  { 
    path: '/about', // About Page
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home/:targetP', // OurHome
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OurHome.vue')
  },
  {
    path: '/chat/:id', // ChatPage
    name: 'Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //http://localhost:8080/chat/-NF4gATFY3s-fUocXHLp
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatpageView.vue')
  },
  {
    path: '/chatchat', // ChatPage
    name: 'Chat Chat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatpageFake.vue')
  },
  {
    path: '/chatitem', // ChatPage
    name: 'Chat Item',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatFunction.vue')
  },
  {
    path: '/profile', // Profile
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilepageView.vue')
  },
  {
    path: '/signup', // Sign Up
    name: 'Sign Up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },
  {
    path: '/task', // Task Page
    name: 'Creating Task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskpageView.vue')
  },
  {
    path: '/login', // Task Page
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/detailedTask/:id/:poster', // Task Page
    name: 'Task Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskDetailView.vue')
  },
  {
    path: '/offer/:id', // Task Page
    name: 'Offers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewOffers.vue')
  },
  {
    path: '/carousel', // Carousel testing
    name: 'Testing Carousel Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestCarousel.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // ...
  // explicitly return false to cancel the navigation
  document.title= `${ process.env.VUE_APP_TITLE } | ${ to.name }`
  next()
  return false
})

export default router
