<!--  -->
<template>
  <div>
    <div class="menu_right">
      <div class="right_top">
        <p>订单详情</p>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="预置订单名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="预置订单描述">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <p>商品信息</p>
        <el-table :data="tableData" style="width: 100%" >
          <el-table-column prop="date" label="商品名称" width="350px">
            <template scope="scope">
              <div style="display: flex; align-items: center">
                <img
                  :src="scope.row.goods.img"
                  style="height: 88px; width: 88px"
                />
                <span style="padding-left: 16px">{{
                  scope.row.goods.descript
                }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="goodType" label="商品类型" align="center"> </el-table-column>
          <el-table-column prop="goodPrice" label="单价" align="center"> </el-table-column>
          <el-table-column prop="goodNum" label="数量" align="center">
            <template slot-scope="scope">
              <el-input-number
                size="mini"
                :min="1"
                :value="scope.row.num"
                v-on:input="handleBlur"
                @change="handleChange(scope.row)"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column prop="allPrice" label="小计" align="center"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100" align="center">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      tableData: [
        {
          goods: {
            img: "http://i1.mifile.cn/a1/pms_1474859997.10825620!80x80.jpg",
            descript: "小米手环2",
          },
          goodType: "非协议",
          goodPrice: "$1.99",
          goodNum: "1",
          allPrice: "$1.99",
        },
      ],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.order_main {
  width: 1200px;
  margin: 0 auto;
  min-height: 500px;
  display: flex;
  justify-content: center;
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
  background-color: #fff;
  padding: 16px 24px 16px 34px;
}
.right_top p {
  color: #302d2c;
  font-weight: bold;
  padding-left: 3px;
  margin-bottom: 30px;
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
>>>.el-input-number .el-input{
  width: 80px;
}
/* @import url(); 引入css类 */
</style>