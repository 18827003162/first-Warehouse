import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import HanderModule from "./routerModules/handerModule";

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...HanderModule,
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = window.localStorage.getItem('token');
  // console.log(isLogin, 'isLogin');
  
  // console.log('to', to.path)

  if (to.path === '/' || to.path === '/register') {
    next()
  } else {
    if (!isLogin) {
      to.path === '/login' ? next() : next({
        path: '/login'
      }) //  防止死循环
    }

  }


  // if(!isLogin && .path ! == '/loign'){
  //   // if (to.path != '/login' || to.path != '/register') {
  //   //     next({
  //   //       path: '/login'
  //   //     })
  //   // }
  // }
  

  next();
})

export default router