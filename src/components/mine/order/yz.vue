<template>
  <div>
    <div class="menu_right">
      <div class="right_top">
        <p>预置订单查询</p>
        <p class="creatOrder" @click="creatYZ">创建预置订单</p>
      </div>
      <div class="right_cont">
        <el-form ref="form" :model="form" style="display: flex; flex-wrap: wrap">
          <div class="first">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="出库单号">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="收货人">
              <el-select v-model="form.region1" placeholder="全部">
                <el-option label="全部1" value="1"></el-option>
                <el-option label="全部2" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="成本中心名称">
              <el-input v-model="form.name"></el-input>
              <p></p>
            </el-form-item>
          </div>
          <div class="third">
            <el-form-item label="创建时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%">
                </el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%">
                </el-date-picker>
              </el-col>
            </el-form-item>
          </div>
        </el-form>
        <div style="display: flex">
          <p class="search">搜索</p>
          <p class="reset">重置</p>
        </div>
        <div class="tableList">
          <div style="display: flex"></div>
          <div>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column prop="gocarNmu" label="预置订单编号"></el-table-column>
              <el-table-column prop="gocarName" label="预置订单名称"></el-table-column>
              <el-table-column prop="name" label="收货人"></el-table-column>
              <el-table-column prop="costCenterName" label="成本中心名称"></el-table-column>
              <el-table-column label="创建日期">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button type="text" @click="sure">下单</el-button>
                    <el-button type="text" @click="deletes">删除</el-button>
                    <el-button type="text" @click="look">查看订单</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <!-- 预置订单弹窗 -->
      <el-dialog title="创建预置订单" :visible.sync="dialogFormVisible">
        <el-form :model="YZform" label-position="right" label-width="100px">
          <el-form-item label="预置订单名称">
            <el-input v-model="form.name" style="width:750px"></el-input>
          </el-form-item>
          <el-form-item label="预置订单描述">
            <el-input v-model="form.desc" style="width:750px"></el-input>
          </el-form-item>
          <el-form-item label="添加商品">
            <div style="display:flex;flex-wrap:wrap;width:750px">
              <div style="display:flex">
                <el-input v-model="form.desc" placeholder="请输入商品编码"></el-input>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              </div>
              <div style="display:flex">
                <el-input v-model="form.desc" placeholder="请输入商品编码"></el-input>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              </div>
              <div style="display:flex">
                <el-input v-model="form.desc" placeholder="请输入商品编码"></el-input>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;width:750px">
              <div style="display:flex">
                <el-input v-model="form.desc" placeholder="请输入商品编码"></el-input>
                <el-input-number v-model=" num" @change="handleChange" :min="1" :max="10" label="描述文字">
                  </el-input-number>
              </div>
              <div style="display:flex">
                <el-input v-model="form.desc" placeholder="请输入商品编码"></el-input>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              </div>
              <div style="display:flex">
                <el-input v-model="form.desc" placeholder="请输入商品编码"></el-input>
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
              </div>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeCreate">取 消</el-button>
          <el-button type="primary" @click="createdOrder">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: "first",
        form: {
          name: "",
          region1: "",
        },
        dialogFormVisible: false,
        tableData: [{
            gocarNmu: "12321321321",
            gocarName: "1月28号活动用品",
            date: "2016-05-03",
            name: "王小虎",
            costCenterName: "策划部",
          },
          {
            gocarNmu: "12321321321",
            gocarName: "1月28号活动用品",
            date: "2016-05-03",
            name: "王小虎",
            costCenterName: "策划部",
          },
          {
            gocarNmu: "12321321321",
            gocarName: "1月28号活动用品",
            date: "2016-05-03",
            name: "王小虎",
            costCenterName: "策划部",
          },
          {
            gocarNmu: "12321321321",
            gocarName: "1月28号活动用品",
            date: "2016-05-03",
            name: "王小虎",
            costCenterName: "策划部",
          },
        ],
        multipleSelection: [],
        dialogFormVisible: false,
        YZform: {
          name: '',
          desc: ''
        },
        num: 1
      };
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {},
    methods: {
      creatYZ() {
        this.dialogFormVisible = true
      },
      closeCreate() {
        this.dialogFormVisible = false
      },
      createdOrder() {
        this.dialogFormVisible = false
      },
      handleChange(value) {
        console.log(value);
      },
      sure(){
        alert('下单')
      },
      deletes(){
        alert('删除订单')
      },
      look(){
        this.$router.push('/mine/yuzhi/chakan')
      }
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

  .one>p {
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

  .creatOrder {
    width: 110px;
    height: 32px;
    background: #5da71e;
    border: 1px solid #e4e4e4;
    color: #fff;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
  }

  .right_cont {
    margin-top: 15px;
    background-color: #fff;
    padding: 18px 22px 18px 34px;
  }

  >>>.el-tabs__active-bar {
    background-color: #5da71e;
  }

  >>>.el-tabs__item.is-active {
    color: #5da71e;
  }

  >>>.el-tabs__item:hover {
    color: #5da71e;
    cursor: pointer;
  }

  >>>.el-input-number {
    width: 125px;
  }

  .first {
    display: flex;
  }

  .first>>>.el-input {
    width: 100px;
  }

  .first>>>.el-form-item__content {
    width: 205px;
  }

  .third {
    width: 100%;
    display: flex;
  }

  .third>>>.el-form-item {
    width: 457px;
  }

  .third>>>.el-col-11 {
    width: 182px;
  }

  .third>>>.el-date-editor.el-input,
  .el-date-editor.el-input__inner {
    width: 100%;
  }

  .third>>>.el-col-2 {
    width: 4px;
    margin: 0 10px;
  }

  .third>>>.el-input {
    width: 100px;
  }

  .third>>>.el-form-item:nth-of-type(3) {
    width: 209px;
  }

  .search {
    width: 60px;
    height: 24px;
    background: #5da71e;
    color: #fff;
    text-align: center;
    line-height: 24px;
    margin-bottom: 17px;
    cursor: pointer;
  }

  .reset {
    width: 60px;
    height: 24px;
    color: #5da71e;
    text-align: center;
    line-height: 24px;
    border: 1px solid #5da71e;
    margin-bottom: 17px;
    margin-left: 20px;
    cursor: pointer;
  }

  >>>.el-input-number .el-input {
    /* width: 100px; */
  }

  >>>.el-input {
    /* width: 100px; */
  }

</style>
