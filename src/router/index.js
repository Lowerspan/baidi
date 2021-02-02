import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/homepage'
import Index from '@/components/index'
import Search from '@/components/searchPage'
import Gwc from '@/components/gouwuche/index'
import Pay from '@/components/pay/index'
import Mine from '@/components/mine/index'
// import Order from '@/components/mine/order/index'
Vue.use(Router)



export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    redirect: '/home',
    component: Index,
    children: [{
      path: '/home',
      name: 'homepage',
      meta: {
        title: '百帝-首页'
      },
      component: Home
    }]
  }, {
    path: '/gwc',
    name: 'gwc',
    meta: {
      title: '百帝-购物车'
    },
    component: Gwc,
    chindren: []
  }, {
    path: '/search',
    name: 'search',
    meta: {
      title: '百帝-搜索'
    },
    component: Search,
  }, {
    path: '/pay',
    name: 'pay',
    meta: {
      title: '百帝-支付'
    },
    component: Pay,
  }, {
    path: '/mine',
    name: 'mine',
    meta: {
      title: '百帝-我的'
    },
    component: Mine,
  }]
})
