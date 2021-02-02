<!--  -->
<template>
  <div class="index">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../common/header";
import Logo1 from "../common/logo1";  
import Nav from "../common/nav";
export default {
  components: {
    Header,
    Logo1,
    Nav,
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
/* @import url(); 引入css类 */
</style>