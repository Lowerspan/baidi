import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/homepage'
import Index from '@/components/index'
import Search from '@/components/searchPage'
import Gwc from '@/components/gouwuche/index'
import Pay from '@/components/pay/index'
import Mine from '@/components/mine/index'
import allOrder from '@/components/mine/order/all'
Vue.use(Router)



export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    redirect: '/',
    component: Index,
    children: [{
      path: '/',
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
    children:[]
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
    redirect:'mine/all',
    component: Mine,
    children:[{
      path:'all',
      name:'allOrder',
      component:allOrder,
      meta: {
        title: '百帝-全部订单'
      },
    },{
      path:'shenpi',
      name:'spOrder',
      component:resolve => require(['@/components/mine/order/sp.vue'],resolve),
      meta: {
        title: '百帝-审批订单'
      },
    },{
      path:'tuihuo',
      name:'thOrder',
      component:resolve => require(['@/components/mine/order/th.vue'],resolve),
      meta: {
        title: '百帝-退货订单'
      },
    },{
      path:'yuzhi',
      name:'yzOrder',
      component:resolve => require(['@/components/mine/order/yz.vue'],resolve),
      meta: {
        title: '百帝-预置订单'
      },
    },{
      path:'yuzhi/chakan',
      name:'look',
      component:resolve => require(['@/components/mine/order/yuzhi/lookyz'],resolve),
    }]
  }]
})
