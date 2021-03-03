<!--  -->
<template>
  <div>
    <Header></Header>
    <Logo1></Logo1>
    <Nav></Nav>
    <div class="order_main">
      <Breadcrumb></Breadcrumb>
      <div class="orderMain">
        <div class="menu_left">
          <div class="one">
            <p>我的订单</p>
            <div class="two">
              <p><router-link to="/mine/all">全部订单</router-link></p>
              <p><router-link to="/mine/shenpi">审批订单</router-link></p>
              <p><router-link to="/mine/tuihuo">退货订单</router-link></p>
              <p><router-link to="/mine/yuzhi">预置订单</router-link></p>
              <p><router-link to="/mine/kuaisu">快速订单</router-link></p>
            </div>
          </div>
          <div class="one">
            <p>我的账户</p>
            <div class="two">
              <p><router-link to="/mine/cbzx">成本中心</router-link></p>
              <p><router-link to="/mine/all">账户资料</router-link></p>
              <p><router-link to="/mine/all">我的收藏</router-link></p>
              <p><router-link to="/mine/all">安全管理</router-link></p>
              <p><router-link to="/mine/all">收货地址</router-link></p>
              <p><router-link to="/mine/all">发票信息</router-link></p>
            </div>
          </div>
          <div class="one">
            <p>我的报表</p>
            <div class="two">
              <p><router-link to="/mine/all">按成本中心统计</router-link></p>
              <p><router-link to="/mine/all">按商品品类统计</router-link></p>
              <p><router-link to="/mine/all">按商品统计</router-link></p>
              <p><router-link to="/mine/all">历史报表</router-link></p>
            </div>
          </div>
        </div>
         <router-view></router-view>
      </div>
      
      <!-- <Order></Order> -->
    </div>
    
  </div>
</template>

<script>
import Header from "../../common/header";
import Logo1 from "../../common/logo1";
import Nav from "../../common/nav";
import Breadcrumb from "../../common/breadcrumb";
// import Order from "./order/index";
export default {
  components: {
    Header,
    Logo1,
    Nav,
    // Order,
    Breadcrumb,
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    
  },
  methods: {
  },
};
</script>
<style scoped>
.order_main {
  width: 100%;
  background-color: #f6f6f6;
}
.orderMain {
  width: 1200px;
  margin: 0 auto;
  min-height: 500px;
  display: flex;
}
.menu_left {
  width: 140px;
  height: 660px;
  background-color: #fff;
  padding: 14px 16px;
  margin-right: 16px;
}
.one {
  margin-bottom: 24px;
}
.one > p {
  font-size: 16px;
  font-weight: bold;
  color: #302d2c;
  /* margin-bottom: 8px; */
}
.two p {
  line-height: 2;
  cursor: pointer;
}
.two p a{
  color: #000;
}
/* @import url(); 引入css类 */
</style>