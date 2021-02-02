<!--  -->
<template>
  <div>
      <Header></Header>
      <Logo1></Logo1>
      <Nav></Nav>
      <div class="order_main">
        <Breadcrumb></Breadcrumb>
        <Order></Order>
      </div>
  </div>
</template>

<script>
import Header from "../../common/header";
import Logo1 from "../../common/logo1";
import Nav from "../../common/nav";
import Breadcrumb from "../../common/breadcrumb";
import Order from "./order/index"
export default {
  components: {
    Header,
    Logo1,
    Nav,
    Order,
    Breadcrumb
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.order_main{
    width: 100%;
    background-color: #F6F6F6;
}
/* @import url(); 引入css类 */
</style>