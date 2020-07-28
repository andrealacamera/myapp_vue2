import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import { from } from 'core-js/fn/array'
// import Contacts from '../views/Contacts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeRouteLeave (to, from, next) {
      console.log(to,from);
      // called when the route that renders this component is about to
      // be navigated away from.
      // has access to `this` component instance.
      // if (confirm("message")) {
      //   next({name: 'Home'})
      // }
      // else 
      //   next();
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    // component: Contacts
    component: () => import('../views/Contacts.vue')
  }
]

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   console.log(from.name);

//   if (from.name == 'Home') {
//     console.log("HOME!");
//     next({name: 'Home'});
//   } else 
//   next();
// });

export default router
