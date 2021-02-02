<!--  -->
<template>
  <div class="gwc_con">
    <div class="gwc_list">
      <p class="title">全部商品</p>
      <div class="select">
        <div class="s_left">
          <p>待采成本中心</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <p>配送至</p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="s_right">
          <p @click="daochu">导出商品</p>
        </div>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{ background: '#f6f6f6', color: '#302D2C' }"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="商品编号">
          <template slot-scope="scope">{{ scope.row.num }}</template>
        </el-table-column>
        <el-table-column prop="name" label="商品名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="type" label="商品类型"> </el-table-column>
        <el-table-column prop="price" label="单价（元）"> </el-table-column>
        <el-table-column prop="num" label="数量"> </el-table-column>
        <el-table-column prop="totle_price" label="小计（元）">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="goCart">
      <div class="gocartL">
        <p><input type="checkbox" name="" id="" /><span>全选</span></p>
        <p>删除选中的商品</p>
        <p>清空失效商品</p>
      </div>
      <div class="gocartR">
        <p>选择<span>3</span>件商品</p>
        <p>总价（不含运费）<span>￥123.00</span></p>
        <p @click="goCart" class="next">去结算</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      value:[],
      options:[]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    daochu() {
      alert("导出数据");
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    goCart() {
      console.log(1)
      // this.$router.push('/gwc/pay')
    },
  },
};
</script>
<style scoped>
.gwc_con {
  width: 1200px;
  margin: 0 auto;
}
.gwc_list {
  background-color: #ffffff;
  padding: 20px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: #1c1c1c;
}
.select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.select >>> .el-select {
  margin: 0 55px 0 10px;
  align-items: center;
}
.s_left {
  display: flex;
  align-items: center;
}
.s_right p {
  width: 110px;
  height: 30px;
  color: #fff;
  background: #5da71e;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.goCart {
  height: 68px;
  display: flex;
  margin: 20px 0 24px;
  /* padding: 24px 30px 0; */
  background: #fff;
  justify-content: space-between;
}
.gocartL {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
}
.gocartR {
  display: flex;
  justify-content: center;
  align-items: center;
}
.next {
  width: 157px;
  height: 100%;
  background: #5da71e;
  text-align: center;
  line-height: 68px;
  color: #fff;
  font-size: 18px;
  margin-left: 64px;
  cursor: pointer;
}
/* @import url(); 引入css类 */
</style>