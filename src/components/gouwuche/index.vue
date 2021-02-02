<!--  -->
<template>
  <div>
    <Header></Header>
    <Logo></Logo>
    <div class="neirong">
      <Container></Container>
      <Recommend></Recommend>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../common/header";
import Logo from "../../common/gwc_logo";
import Recommend from "../../common/tuijian";
import Container from "./components/gwc_con";
export default {
  components: {
    Recommend,
    Container,
    Header,
    Logo,
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
.neirong{
   background: #F6F6F6;
   padding-top: 20px;
}
/* @import url(); 引入css类 */
</style>