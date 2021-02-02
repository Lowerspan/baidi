<!--  -->
<template>
  <div class="searchpage">
    <Header></Header>
    <Logo1></Logo1>
    <Nav></Nav>
    <BeardPage></BeardPage>
    <div class="search_container">
      <div class="about">
        <p class="about_title">相关分类</p>
        <p v-for="(item, index) in aboutList" :key="index" class="classify">
          {{ item }}
        </p>
      </div>
      <div class="good_list">
        <div class="function">
          <div class="function_left">
            <p>综合</p>
            <p>销量</p>
            <p>评论数</p>
            <p>价格</p>
          </div>
          <div class="function_right">
            <Page :current="1" :total="50" simple :page-size="2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../common/header";
import Logo1 from "../common/logo1";
import Nav from "../common/nav";
import BeardPage from "../common/breadcrumb";
export default {
  components: {
    BeardPage,
    Header,
    Logo1,
    Nav,
  },
  data() {
    return {
      aboutList: ["平板电脑", "HDMI线", "电源线", "插座", "屏幕", "显示屏"],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.searchpage {
}
.search_container {
  width: 1200px;
  margin: 0 auto;
}
.about {
  display: flex;
  border-bottom: 1px solid #d9d9d9;
  padding: 32px 0 16px 0;
}
.about_title {
  margin-right: 40px;
  color: #969696;
}
.classify {
  margin-right: 32px;
  cursor: pointer;
}
.function {
  width: 1200px;
  height: 40px;
  line-height: 40px;
  margin-top: 32px;
  background: #f6f6f6;
}
.function_left {
  display: flex;
  float: left;
}
.function_left p {
  width: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.function_right {
  float: right;
  margin-right: 50px;
}
/* @import url(); 引入css类 */
</style>