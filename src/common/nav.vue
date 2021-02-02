<!--  -->
<template>
  <div class="border">
    <div class="nav_list container">
      <div class="first_nav">
        <span class="iconfont">&#xe6ac;</span>
        <p>商品分类</p>
      </div>
      <div class="nav">
        <ul>
          <router-link to="home" v-for="(item, index) in navList" :key="index" @mouseenter="active">
            <li>
              {{ item }}
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: ["首页", "新品专区", "网站用户手册", "刊物下载"],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    active(){
      console.log(1)
    }
  },
};
</script>
<style scoped>
.border {
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.nav_list {
  height: 54px;
  line-height: 54px;
  justify-content: flex-start;
}
.first_nav {
  width: 190px;
  height: 54px;
  background-color: #5da71e;
  display: flex;
  color: #ffffff;
  padding: 0 24px;
}
.iconfont {
  margin-right: 5px;
}
.nav ul {
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.nav ul li {
  width: 190px;
  height: 54px;
  color: #000;
}
/* @import url(); 引入css类 */
</style>