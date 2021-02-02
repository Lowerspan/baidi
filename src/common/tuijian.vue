<!--  -->
<template>
  <div class="recommend_container">
      <div class="recommend_title">
          <p>推荐商品</p>
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
.recommend_container{
  width: 1200px;
  margin: 0 auto;
}
.recommend_title{
    background-color: #F6F6F6;
    height: 40px;
    line-height: 40px;
}
.recommend_title p{
    width: 110px;
    background-color: #5DA71E;
    color: #FFF;
    text-align: center;
}
/* @import url(); 引入css类 */
</style>