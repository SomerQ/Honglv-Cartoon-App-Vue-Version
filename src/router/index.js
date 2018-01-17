import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Serialize from '@/components/serialize'
import Theme from '@/components/theme'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  },{name:"serialize",path:'/serialize',component:Serialize},
{
  name:"theme",path:'/theme',component:Theme
}]
})
