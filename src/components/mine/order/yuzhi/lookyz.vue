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
        <el-table :data="tableData" style="width: 100%">
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
          <el-table-column prop="goodType" label="商品类型" align="center">
          </el-table-column>
          <el-table-column prop="goodPrice" label="单价" align="center">
          </el-table-column>
          <el-table-column label="数量" align="center" width="180">
            <template scope="scope">
              <div>
                <el-input
                  v-model="scope.row.goodNum"
                  @change="handleInput(scope.row)"
                >
                  <el-button slot="prepend" @click="del(scope.row)"
                    ><i class="el-icon-minus"></i
                  ></el-button>
                  <el-button slot="append" @click="add(scope.row)"
                    ><i class="el-icon-plus"></i
                  ></el-button>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="allPrice" label="小计" align="center">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100"
            align="center"
          >
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
        <div class="zongji">
          <p>共<span style="color:#5DA71E">2</span>件商品</p>
          <p>总价（不含运费）</p>
          <p style="color:#D44D44">￥<span style="font-size:26px">{{moneyTotal}}</span></p>
        </div>
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
          goodPrice: 1,
          goodNum: 1,
          allPrice: 1,
        },
      ],
      moneyTotal:1500,
      multipleSelection: [],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handleInput: function (value) {
      if (null == value.goodNum || value.goodNum == "") {
        value.goodNum = 1;
      }
      value.allPrice = (value.goodNum * value.goodPrice).toFixed(2); //保留两位小数
      //增加商品数量也需要重新计算商品总价
      this.selected(this.multipleSelection);
    },
    add: function (addGood) {
      //输入框输入值变化时会变为字符串格式返回到js
      //此处要用v-model，实现双向数据绑定
      console.log(addGood);
      if (typeof addGood.goodNum == "string") {
        addGood.goodNum = parseInt(addGood.goodNum);
      }
      addGood.goodNum += 1;
    },
    del: function (delGood) {
      if (typeof delGood.goodNum == "string") {
        delGood.goodNum = parseInt(delGood.goodNum);
      }
      if (delGood.goodNum > 1) {
        delGood.goodNum -= 1;
      }
    },
    //返回的参数为选中行对应的对象
    selected: function (selection) {
      this.multipleSelection = selection;
      this.moneyTotal = 0;
      //此处不支持forEach循环，只能用原始方法了
      for (var i = 0; i < selection.length; i++) {
        //判断返回的值是否是字符串
        if (typeof selection[i].goodTotal == "string") {
          selection[i].goodTotal = parseInt(selection[i].goodTotal);
        }
        this.moneyTotal += selection[i].goodTotal;
      }
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
  justify-content: center;
}
.menu_left {
  width: 140px;
  height: 660px;
  background-color: #fff;
  padding: 14px 16px;
  margin-right: 30px;
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
.zongji{
  display: flex;
  justify-content:flex-end;
  margin-top: 20px;
  font-size: 16px;
  align-items: center;
}
.zongji p:first-of-type{
  margin-right: 20px;
}
.zongji p{
  font-weight: normal;
}
/* @import url(); 引入css类 */
</style>