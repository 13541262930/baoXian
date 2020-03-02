import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
// import cp from '@/components/cp'
// import ap from '@/components/ap'
// import pp from '@/components/pp'
// import mp from '@/components/mp'
// import tk from '@/components/tk'
// import imt from '@/components/imt'


Vue.use(Router)

const routers = [
    {
      path: '/',
      redirect(){
        return '/cp'
      }
    },
    {
      path: '/cp',
      name: 'cp',
      component: ()=>import('@/components/cp')
    },
    {
      path: '/ap',
      name: 'ap',
      component: ()=>import('@/components/ap')
    },
    {
      path: '/pp',
      name: 'pp',
      component: ()=>import('@/components/pp')
    },
    {
      path: '/mp',
      name: 'mp',
      component: ()=>import('@/components/mp')
    },
    {
      path: '/tk',
      name: 'tk',
      component: ()=>import('@/components/tk')
    },
    {
      path: '/imt',
      name: 'imt',
      component: ()=>import('@/components/imt')
    }
  ]


const router = new VueRouter({
  router,
  mode:'history'
})
router.beforeEach((to,from,next)=>{
    console.log(123)
})

export default router