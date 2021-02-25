<!--  -->
<template>
  <div class="header_container">
    <div class="Header_1">
      <div class="position">
        <p class="iconfont position_icon">&#xe627;</p>
        <p>北京</p>
      </div>
      <div class="top_left">
      <div class="userInfo">
          <p>尊敬的会员，欢迎登录百帝科技</p>
          <el-button id="logout">退出</el-button>
      </div>
      <div class="function">
        <p>绑定手机</p>
        <p @click="goOrder">我的订单</p>
        <div class="phone_line">
          <p class="iconfont">&#xe66b;</p>
          <p>采购专线 400-365-0000</p>
        </div>
      </div>
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
  methods: {
    goOrder(){
      this.$router.push('/mine')
    }
  },
};
</script>
<style scoped>
.header_container {
  width: 100%;
  background: #5da71e;
  color: #fff;
  height: 38px;
}
.Header_1 {
  width: 1200px;
  height: 38px;
  line-height: 38px;
  margin: 0 auto;
  display: flex;
  justify-content:space-between;
}
.position {
  display: flex;
  height: 38px;
}
.position p {
  align-items: center;
  line-height: 38px;
}
.position_icon {
  font-size: 18px;
  margin-right: 12px;
}
.top_left{
  display: flex;
  justify-content:space-between
}
.userInfo{
    display: flex;
    align-items:center;
}

#logout{
    width: 45px;
    height: 22px;
    padding: 0;
    margin-left: 16px;
    font-size: 12px;
    margin-right: 36px;
}

.function{
  display: flex;
  justify-content:space-between
}
.function>p{
margin-right:10px;
}
.phone_line{
  display: flex;
}
</style>