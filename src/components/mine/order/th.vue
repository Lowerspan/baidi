
<template>
  <div>
    <div class="menu_right">
      <div class="right_top">
        <p>退货订单查询</p>
        <p class="daochu" @click="daochu">导出订单</p>
      </div>
      <div class="right_cont">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="退货列表" name="first">
            订单号：<el-input
              v-model="orderNum"
              placeholder="请输入内容"
              class="search_input"
            ></el-input>
            <span class="sousuo">搜索</span>
            <div>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="tdNum" label="退单编号">
                </el-table-column>
                <el-table-column prop="ddNum" label="订单编号">
                </el-table-column>
                <el-table-column prop="date" label="下单日期"> </el-table-column>
                <el-table-column prop="people" label="下单人"> </el-table-column>
                <el-table-column prop="cargoStatus" label="退货状态"> </el-table-column>
                <el-table-column prop="accountStatus" label="退款状态"> </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="退货记录" name="second"></el-tab-pane>
        </el-tabs>
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
      orderNum: "",
       tableData: [{
            tdNum:'2232626562',
            ddNum:'46546556545',
            date: '2016-05-02',
            people: '王小虎',
            cargoStatus: '退款中，等待确认收货',
            accountStatus:'已到账'
          }, {
             tdNum:'2232626562',
            ddNum:'46546556545',
            date: '2016-05-02',
            people: '王小虎',
            cargoStatus: '退款中，等待确认收货',
            accountStatus:'已到账'
          }, {
             tdNum:'2232626562',
            ddNum:'46546556545',
            date: '2016-05-02',
            people: '王小虎',
            cargoStatus: '退款中，等待确认收货',
            accountStatus:'已到账'
          }, {
             tdNum:'2232626562',
            ddNum:'46546556545',
            date: '2016-05-02',
            people: '王小虎',
            cargoStatus: '退款完成',
            accountStatus:'未到账'
          }]
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
  background-color: #fff;
  padding: 18px 22px 18px 34px;
}
>>> .el-tabs__active-bar {
  background-color: #5da71e;
}
>>> .el-tabs__item.is-active {
  color: #5da71e;
}
>>> .el-tabs__item:hover {
  color: #5da71e;
  cursor: pointer;
}
.first,
.second {
  display: flex;
}
.search_input {
  width: 300px;
}
.search {
  width: 60px;
  height: 24px;
  background: #5da71e;
  color: #fff;
  text-align: center;
  line-height: 24px;
  margin-bottom: 17px;
}
.sousuo {
  width: 38px;
  height: 38px;
  background: #5da71e;
  color: #fff;
  text-align: center;
  line-height: 36px;
  display: inline-block;
}
</style>