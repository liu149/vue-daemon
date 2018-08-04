import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Contact from '@/components/about/Contact'

Vue.use(Router)

const routes = [{
      path : '/',
      component : Home
    },{
      path : '/menu',
      component : Menu
    },{
      path : '*',
      redirect : '/'
}]

export default new Router({
  routes,
  mode : 'history'
})
