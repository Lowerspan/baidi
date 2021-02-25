<!--  -->
<template>
  <div class="banner_container">
    <div class="bannerNavList">
      <div class="navLeft">
        <ul
          v-for="(item, index) in bannnerNavList"
          :key="index"
          @mouseenter="changeActive($event, index)"
          @mouseleave="removeActive($event)"
        >
          <li>
            {{ item }}
          </li>
        </ul>
      </div>
      <div v-if="childMenu" class="childMenu"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childMenu: false,
      bannnerNavList: [
        "办公1",
        "办公2",
        "办公3",
        "办公4",
        "办公5",
        "办公6",
        "办公7",
        "办公8",
        "办公9",
        "办公10",
        "办公11",
        "办公12",
        "办公13",
      ],
      childrenList: [
        {
          firstTitle: "文件管理",
          childTitle: [
            "档案盒",
            "文件袋",
            "文件袋2",
            "文件袋3",
            "文件袋a",
            "文件袋s",
            "文件袋d",
            "文件袋z",
            "文件袋x",
            "文件袋r",
            "文件袋n",
            "文件袋m",
          ],
        },
        {
          firstTitle: "文件管理2",
          childTitle: [
            "档案盒",
            "文件袋",
            "文件袋2",
            "文件袋3",
            "文件袋a",
            "文件袋s",
            "文件袋d",
            "文件袋z",
            "文件袋x",
            "文件袋r",
            "文件袋n",
            "文件袋m",
          ],
        },
        {
          firstTitle: "文件管理3",
          childTitle: [
            "档案盒",
            "文件袋",
            "文件袋2",
            "文件袋3",
            "文件袋a",
            "文件袋s",
            "文件袋d",
            "文件袋z",
          ],
        },
        {
          firstTitle: "文件管理4",
          childTitle: ["档案盒", "文件袋", "文件袋2", "文件袋3", "文件袋a"],
        },
        {
          firstTitle: "文件管理5",
          childTitle: [
            "档案盒",
            "文件袋",
            "文件袋2",
            "文件袋3",
            "文件袋a",
            "文件袋s",
            "文件袋d",
            "文件袋z",
            "文件袋x",
          ],
        },
      ],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    changeActive(e, index) {
      // console.log(e, index);
      e.currentTarget.className = "active";
      this.childMenu = true
    },
    removeActive(e) {
      e.currentTarget.className = "";
      this.childMenu = false
    },
  },
};
</script>
<style scoped>
.active {
  width: 100%;
  background: #c9d8bd;
}
.bannerNavList {
  display: flex;
}
.navLeft {
  width: 190px;
  height: 554px;
  box-sizing: border-box;

  background-color: #ffffff;
}
.navLeft ul {
  padding-left: 16px;
}
.navLeft ul li {
  list-style: none;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
}
.childMenu {
  width: 1010px;
  height: 554px;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16);
}
/* @import url(); 引入css类 */
</style>