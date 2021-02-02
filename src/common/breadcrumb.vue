<!--  -->
<template>
  <div>
    <div class="bread_box">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: 'home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
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
.bread_box {
  width: 100%;
  background: #f6f6f6;
}
>>> .el-breadcrumb {
  width: 1200px;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
}
/* @import url(); 引入css类 */
</style>