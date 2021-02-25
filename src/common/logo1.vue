<!-- 第一种形式的logo1 -->
<template>
  <div class="container">
    <div class="logo_img" style="width: 270px; height: 41px">
      <router-link to="/">
        <img src="../assets/images/logo.jpg" alt="" style="height: 100%" />
      </router-link>
    </div>
    <div class="logo_right">
      <div class="search_input">
        <el-input v-model="searchKeyWord" placeholder="请输入内容"></el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          @click="gotoSearch"
        ></el-button>
      </div>
      <router-link to="/gwc">
        <div class="mine_index">
          <el-badge :value="3">
            <span class="iconfont">&#xe63f;</span>
          </el-badge>
          <p>我的购物车</p>
        </div>
      </router-link>
      <router-link to="/shoucang">
        <div class="mine_index">
          <el-badge :value="1">
            <span class="iconfont">&#xe613;</span>
          </el-badge>
          <p>我的收藏</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyWord:[],
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
.mine_index {
  display: flex;
  justify-content: center;
  width: 125px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  margin-left: 10px;
  cursor: pointer;
  color: #000;
}
.iconfont {
  font-size: 18px;
  color: #969696;
}
.mine_index p {
  margin: 0 5px;
}
/* @import url(); 引入css类 */
</style>