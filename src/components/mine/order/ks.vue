
<template>
  <div>
      <div class="menu_right">
        <div class="right_top">
          <p>审批订单查询</p>
          <p class="daochu" @click="daochu">导出订单</p>
        </div>
        <div class="right_cont">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="first">
              <el-form
                ref="form"
                :model="form"
                style="display: flex; flex-wrap: wrap"
              >
              <div class="first">
                <el-form-item label="活动名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="出库单号">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="成本中心信息">
                  <el-input v-model="form.name"></el-input>
                  <p></p>
                </el-form-item>
                <el-form-item label="收货人">
                  <el-select v-model="form.region1" placeholder="全部">
                    <el-option label="全部1" value="1"></el-option>
                    <el-option label="全部2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="订单状态">
                  <el-select v-model="form.region2" placeholder="全部">
                    <el-option label="全部3" value="3"></el-option>
                    <el-option label="全部4" value="4"></el-option>
                  </el-select>
                </el-form-item>
                </div>
                <div class="second">
                <el-form-item label="出库状态">
                  <el-select v-model="form.region1" placeholder="全部">
                    <el-option label="全部1" value="1"></el-option>
                    <el-option label="全部2" value="2"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="开票状态">
                  <el-select v-model="form.region2" placeholder="全部">
                    <el-option label="全部3" value="3"></el-option>
                    <el-option label="全部4" value="4"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="是否签收">
                  <el-select v-model="form.region2" placeholder="全部">
                    <el-option label="全部3" value="3"></el-option>
                    <el-option label="全部4" value="4"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="PO/PR单号">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="商品编号">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                </div>
                <div class="third">
                <el-form-item label="活动时间" >
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="最后一次审核时间">
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="PO/PR单号">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                </div>
              </el-form>
              <p class="search">搜索</p>
              <div class="dingdan_list">
                <div class="list_con">
                  <div class="title">
                    <p>2020-11-23  15：19：54</p>
                    <p>订单号：13889237445631</p>
                    <p>成本中心：媒体运营一部</p>
                  </div>
                  <div class="cont">
                    <div class="left">
                      <div class="good_img">
                        <img src="" alt="">
                      </div>
                      <p class="good_title">得力(deli) 高精度电子数显游标卡尺 数显卡尺0-150mm 符合</p>
                      <p class="good__price">¥128.80</p>
                    </div>
                    <div class="middle">
                      <p>收货人</p>
                      <p>酱油都凉了</p>
                    </div>
                    <div class="right">
                      <p>订单总金额</p>
                      <p>¥2099.00</p>
                    </div>
                    <div class="xiangqing">
                      <p>订单状态：已作废</p>
                      <p>订单详情</p>
                    </div>
                    <div class="buy">
                      <p>再次购买</p>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="审批中订单" name="second">审批中订单</el-tab-pane>
            <el-tab-pane label="未审批订单" name="third">未审批订单</el-tab-pane>
            <el-tab-pane label="审批完成订单" name="fourth">审批完成订单</el-tab-pane>
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
.first, .second{
    display: flex;
}
.first >>> .el-form-item,.second >>> .el-form-item  {
  width: 20%;
}
.first >>> .el-input ,.second >>> .el-input{
  width: 100px;
}
.first >>> .el-form-item__content ,.second >>> .el-form-item__content{
  width: 205px;
}
.third{
  width: 100%;
  display: flex;
}
.third >>>.el-form-item{
  width: 457px;
}
.third >>> .el-col-11{
  width: 116px;
}
.third >>>.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 100%;
}
.third >>>.el-col-2{
  width: 4px;
  margin: 0 10px;
}
.third >>> .el-input{
  width: 100px;
}
.third >>>.el-form-item:nth-of-type(3){
  width: 209px;
}
.search{
  width: 60px;
  height: 24px;
  background: #5da71e;
  color: #FFF;
  text-align: center;
  line-height: 24px;
  margin-bottom: 17px;
}
.list_con{
  width: 100%;
  height: 100%;
  border: 1px solid #D9D9D9;
}
.title{
  width: 100%;
  height: 35px;
  display: flex;
  background: #D9D9D9;
  align-items: center;
  padding: 0 17px;
}
.cont{
  width: 100%;
  height: 126px;
  
  display: flex;
}
.cont .left{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 17px;
  border-right: 1px solid #D9D9D9;
  box-sizing: border-box;
}
.good_img{
  width: 88px;
  height: 88px;
}
.good_img img{
  width: 100%;
}
.good_title{
  width: 210px;
  margin-left: 24px;
  margin-right: 35px;
}
.middle, .right, .xiangqing{
  width: 140px;
  border-right: 1px solid #D9D9D9;
  text-align: center;
  padding-top: 16px;
}
.xiangqing p:nth-of-type(2){
  width: 60px;
  height: 24px;
  background-color: #5DA71E;
  margin: 0 auto;
  color: #FFF;
  text-align: center;
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
}
.buy{
  width: 140px;
  padding-top: 16px;
}
.buy p{
  width: 60px;
  height: 24px;
  background-color: #FF6700;
  margin: 0 auto;
  color: #FFF;
  text-align: center;
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
}
/* >>> .el-form-item__content .el-input {
  width: 100px;
} */
/* @import url(); 引入css类 */
</style>