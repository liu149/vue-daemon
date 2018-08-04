import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Admin from '@/components/Admin'
import About from '@/components/about/About'
import Login from '@/components/Login'
import Regist from '@/components/Regist'

//二级路由（about下）
import Contact from '@/components/about/Contact'
import Dilivery from '@/components/about/Dilivery'
import History from '@/components/about/History'
import  OrderingGuide from '@/components/about/OrderingGuide'


Vue.use(Router)

const routes = [{
      path : '/',
      component : Home
    },{
      path : '/menu',
      component : Menu
    },{
      path : '/admin',
      component : Admin
    }, {
      path : '/about',
      component : About,
      children : [{
        path : 'contact',
        component : Contact
      },{
        path : 'dilivery',
        component : Dilivery
      },{
        path : 'history',
        component : History
      },{
        path : 'orderingGuide',
        component : OrderingGuide
      }]
    },{
      path : '/login',
      component : Login
    },{
      path : '/regist',
      component : Regist
    },{
      path : '*',
      redirect : '/'
}]

export default new Router({
  routes,
  mode : 'history'
})
