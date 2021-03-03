<template>
  <div>
    <div class="menu_right">
      <div class="right_top">
        <p>快速订单</p>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="创建快速订单">
            <el-input type="textarea" v-model="form.order" placeholder="请输入商品编码及商品数量，不同商品换行填写，商品编码与商品数量之间用空格隔开"></el-input>
          </el-form-item>
        </el-form>
        <div class="caozuo">
          <p class="addCart">加入购物车</p>
          <p class="clear">清空</p>
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
        order: "",
      },
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {},
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
.right_top > p {
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
>>>.el-textarea__inner{
  width: 750px;
  height: 400px;
}
.caozuo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.addCart {
  width: 100px;
  height: 30px;
  background: #5da71e;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
  margin-right: 20px;
}
.clear {
  width: 100px;
  height: 30px;
  color: #969696;
  border: 1px solid #d9d9d9;
  text-align: center;
  line-height: 30px;
  margin-right: 20px;
}
/* @import url(); 引入css类 */
</style>