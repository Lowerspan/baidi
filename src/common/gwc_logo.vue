<!-- 第一种形式的logo1 -->
<template>
  <div class="container">
    <div class="logo_img" style="width: 270px; height: 41px">
      <router-link to="/home">
        <img src="../assets/images/logo.jpg" alt="" style="height: 100%" />
      </router-link>
    </div>
    <div class="logo_right">
      <div class="search_input">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="gotoSearch"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input:""
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    gotoSearch: function () {
      this.$router.push("/search");
    },
  },
};
</script>
<style scoped>
.container {
  height: 86px;
  align-items: center;
}
.logo_right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.search_input {
  width: 456px;
  display: flex;
}
.search_input >>> .el-input__inner {
  outline: none !important;
  height: 38px;
}
.search_input >>> .el-button {
  width: 38px;
  height: 38px;
  background-color: #5da71e;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* @import url(); 引入css类 */
</style>