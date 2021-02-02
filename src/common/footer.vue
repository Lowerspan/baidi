<!--  -->
<template>
  <div class="footer">
    <div class="footer_con">
      <div class="con_1">
        <div class="con_2">
          <div class="img">
            <img src="../assets/footer/icon_pinlei@2x.png" alt="" />
          </div>
          <div class="des">
            <p style="margin-bottom: 8px">品类齐全</p>
            <p>省心省力 一站购齐</p>
          </div>
        </div>
        <div class="con_2">
          <div class="img">
            <img src="../assets/footer/icon_pinlei@2x.png" alt="" />
          </div>
          <div class="des">
            <p style="margin-bottom: 8px">品类齐全</p>
            <p>省心省力 一站购齐</p>
          </div>
        </div>
        <div class="con_2">
          <div class="img">
            <img src="../assets/footer/icon_pinlei@2x.png" alt="" />
          </div>
          <div class="des">
            <p style="margin-bottom: 8px">品类齐全</p>
            <p>省心省力 一站购齐</p>
          </div>
        </div>
        <div class="con_2">
          <div class="img">
            <img src="../assets/footer/icon_pinlei@2x.png" alt="" />
          </div>
          <div class="des">
            <p style="margin-bottom: 8px">品类齐全</p>
            <p>省心省力 一站购齐</p>
          </div>
        </div>
      </div>
      <div style="border-bottom: 1px solid #d9d9d9"></div>
      <div class="bottomNav">
        <div class="bn_list">
          <div class="list_con">
            <p class="list_title">购物指南</p>
            <p>注册客户</p>
            <p>商品订购</p>
            <p>网站操作手册下载</p>
          </div>
        </div>
        <div class="bn_list">
          <div class="list_con">
            <p class="list_title">购物指南</p>
            <p>注册客户</p>
            <p>商品订购</p>
            <p>网站操作手册下载</p>
          </div>
        </div>
        <div class="bn_list">
          <div class="list_con">
            <p class="list_title">购物指南</p>
            <p>注册客户</p>
            <p>商品订购</p>
            <p>网站操作手册下载</p>
          </div>
        </div>
        <div class="bn_list">
          <div class="list_con">
            <p class="list_title">购物指南</p>
            <p>注册客户</p>
            <p>商品订购</p>
            <p>网站操作手册下载</p>
          </div>
        </div>
        <div class="bn_list">
          <div class="list_con">
            <p class="list_title">购物指南</p>
            <p>注册客户</p>
            <p>商品订购</p>
            <p>网站操作手册下载</p>
          </div>
        </div>
        <div class="bn_list">
          <div class="list_con">
            <p class="list_title">购物指南</p>
            <p>注册客户</p>
            <p>商品订购</p>
            <p>网站操作手册下载</p>
          </div>
        </div>
        <div>
          <div style="width: 97px; height: 97px; margin: 0 auto">
            <img
              src="../assets/images/index/图像 48@2x.png"
              alt=""
              style="width: 100%"
            />
          </div>
          <p style="margin-top: 8px">扫描二维码关注我们</p>
        </div>
      </div>
      <div>
        <div class="bottom1">
          <p>版权所有：江苏百帝防护用品有限公司</p>
          <p style="margin: 0 16px">|</p>
          <p>地址：江苏省盐城市亭湖区新洋西路106号</p>
          <p style="margin: 0 16px">|</p>
          <p>联系电话：0515-88598198-8232</p>
        </div>
        <div class="bottom2">
          <p>ICP备案号：苏ICP备 15062162-1</p>
          <p style="margin: 0 16px">|</p>
          <p>营业执照扫描件</p>
          <p style="margin: 0 16px">|</p>
          <p>公安备案号:32090202000594</p>
        </div>
        <div class="bottom3">
          <div style="width:135px;margin-right:32px">
            <img src="../assets/images/index/图像 46@2x.png" alt="" style="width:100%" />
          </div>
          <div style="width:114px">
            <img src="../assets/images/index/图像 47@2x.png" alt="" style="width:100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.footer {
  width: 100%;
  background-color: #f6f6f6;
}
.footer_con {
  width: 1200px;
  margin: 0 auto;
}
.con_1 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 62px 58px;
}
.con_2 {
  display: flex;
}
.img {
  width: 60px;
  margin-right: 18px;
}
.img img {
  width: 100%;
}

.des p:nth-child(1) {
  font-weight: bold;
  font-size: 20px;
}
.bottomNav {
  display: flex;
  justify-content: space-around;
  padding: 26px 20px;
}
.bn_list {
  display: flex;
}
.list_title {
  font-size: 16px;
  font-weight: bold;
  line-height: 18px;
  color: #5da71e;
  padding-left: 8px;
  border-left: 3px solid #5da71e;
  margin-bottom: 27px !important;
}
.list_con p {
  margin-bottom: 16px;
}
.bottom1, .bottom2, .bottom3{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
}
/* @import url(); 引入css类 */
</style>