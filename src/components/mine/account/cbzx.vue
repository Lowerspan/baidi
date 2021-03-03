
<template>
  <div>
    <div class="menu_right">
      <div class="right_top">
        <p>成本中心设置</p>
        <div class="topMenu">
          <p class="createCenter" @click="daochu">创建成本中心</p>
          <p class="createUser" @click="daochu">创建用户</p>
        </div>
      </div>
      <div class="right_cont">
        <div class="left">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="成本中心" name="first">
                <el-input v-model="input" placeholder="请输入成本中心名称"></el-input><span>搜索</span>
            </el-tab-pane>
            <el-tab-pane label="用户" name="second">
              <el-input v-model="input" placeholder="请输入用户昵称"></el-input><span>搜索</span>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      form: {
        name: "",
        region1: "",
        region2: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    daochu() {
      console.log(1);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style scoped>
.order_main {
  width: 1200px;
  margin: 0 auto;
  min-height: 500px;
  display: flex;
}
.menu_left {
  width: 140px;
  height: 660px;
  background-color: #fff;
  padding: 14px 16px;
  margin-right: 16px;
}
.one {
  margin-bottom: 24px;
}
.one > p {
  font-size: 16px;
  font-weight: bold;
  color: #302d2c;
  /* margin-bottom: 8px; */
}
.two p {
  line-height: 2;
}
.menu_right {
  width: 1044px;
}
.right_top {
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px 16px 34px;
}
.daochu {
  width: 110px;
  height: 32px;
  background: #5da71e;
  border: 1px solid #e4e4e4;
  color: #fff;
  line-height: 32px;
  text-align: center;
}
.right_cont {
  margin-top: 15px;
}
.topMenu {
  display: flex;
  text-align: center;
}
.createCenter {
  width: 110px;
  height: 32px;
  background: #3370ff;
  line-height: 32px;
  color: #ffffff;
  margin-right: 30px;
}
.createUser {
  width: 110px;
  height: 32px;
  background: #5da71e;
  line-height: 32px;
  color: #ffffff;
}
.left {
  width: 255px;
  min-height: 594px;
  background-color: #ffffff;
  padding: 10px 34px;
}
>>>.el-input{
width: 150px;
}
>>>.el-tabs--card>.el-tabs__header{
  border: none;
  margin-bottom: 0;
}
>>>.el-input__inner{
  
  height: 28px;
  line-height: 28px;
}
>>>.el-tab-pane span{
  display: inline-block;
  width: 36px;
  height: 28px;
  background: #5da71e;
  color: #FFF;
  line-height: 28px;
  text-align: center;
}
>>>.el-tabs .el-tabs--card .el-tabs--top{
  width: 187px;
}
>>>.el-tabs--card>.el-tabs__header .el-tabs__nav{
  border: 1px solid #E4E4E4;
}
>>>.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
  background-color: #5DA71E;
  color: #FFF;
}
>>>.el-tabs__item:hover{
  color: #000;
}
/* >>>.el-tabs el-tabs--card el-tabs--top{
  width: 187px;
}
>>>.el-tabs__header .is-top{
  width: 63px;
  height: 20px;
  line-height: 20px;
  padding: 0;
} */
</style>