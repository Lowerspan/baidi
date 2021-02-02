<!--  -->
<template>
  <div class="logo">
    <div class="container">
      <div class="logo_img" style="width: 270px; height: 41px">
        <router-link to="home">
          <img
            src="../../../assets/images/logo.jpg"
            alt=""
            style="height: 100%"
          />
        </router-link>
      </div>
      <div class="logo_right">
        <el-steps :active="2" align-center>
          <el-step title="我的购物车"></el-step>
          <el-step title="确认订单"></el-step>
          <el-step title="成功提交订单"></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.container {
  height: 86px;
  line-height: 1;
  align-items: center;
}
.logo_img{
}
.logo_right {
  width: 500px;
}
/* @import url(); 引入css类 */
</style>