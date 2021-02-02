<template>
  <div class="main">
    <Header></Header>
    <Logo1></Logo1>
    <Nav></Nav>
    <div class="bannerList">
      <Banner></Banner>
      <div class="banner_img">
        <img src="../assets/images/index/图像 73@2x.png" alt="" />
      </div>
      <div class="banner_right">
        <div class="right1">
          <div class="right1_title">
            <span class="iconfont">&#xe633;</span>
            <p>我的消息</p>
          </div>
        </div>
        <div class="right2">
          <div class="right1_title">
            <span class="iconfont">&#xe683;</span>
            <p>公司公告</p>
          </div>
        </div>
        <div class="right3">
          <div class="right1_title">
            <span class="iconfont">&#xe603;</span>
            <p>联系我们</p>
          </div>
        </div>
      </div>
    </div>
    <div class="index_main">
      <div>
        <div class="main_title">
          <p>协议商品专区</p>
          <p>查看更多</p>
        </div>
        <div class="goods_main">
          <div>
            <div class="good_img">
              <img src="../assets/images/index/图像 79@2x.png" alt="" />
              <p>协议商品</p>
            </div>
            <p class="good_des">
              百舸 劳保手套棉线手套细纱加密棉纱手套批发加厚耐磨工作手套
              工地车间劳
            </p>
            <p class="price">¥18.50<span>¥20.00</span></p>
          </div>
        </div>
      </div>
      <div style="margin-top: 36px">
        <div class="main_title_1">
          <p>智能穿戴</p>
        </div>
        <div style="width: 100%; display: flex">
          <div class="tips">
            <img src="../assets/images/index/图像 82@2x.png" alt="" />
          </div>
          <div class="goods_main">
            <div class="good_img">
              <img src="../assets/images/index/图像 79@2x.png" alt="" />
              <p>协议商品</p>
            </div>
            <p class="good_des">
              百舸 劳保手套棉线手套细纱加密棉纱手套批发加厚耐磨工作手套
              工地车间劳
            </p>
            <p class="price">¥18.50<span>¥20.00</span></p>
          </div>
        </div>
      </div>
      <div style="margin-top: 36px">
        <div class="main_title_1">
          <p>热门频道</p>
        </div>
        <div style="width:100%;display:flex">
          <div class="hotList">
            <div class="hot_main">
              <img src="../assets/images/index/图层2@2x.png" alt="" />
            </div>
            <p>安防用品</p>
          </div>
          <div class="hotList">
            <div class="hot_main">
              <img src="../assets/images/index/图层2@2x.png" alt="" />
            </div>
            <p>安防用品</p>
          </div><div class="hotList">
            <div class="hot_main">
              <img src="../assets/images/index/图层2@2x.png" alt="" />
            </div>
            <p>安防用品</p>
          </div><div class="hotList">
            <div class="hot_main">
              <img src="../assets/images/index/图层2@2x.png" alt="" />
            </div>
            <p>安防用品</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../common/header";
import Logo1 from "../common/logo1";
import Nav from "../common/nav";
import Banner from "./menu";
import Footer from "../common/footer";
export default {
  components: {
    Header,
    Logo1,
    Nav,
    Banner,
    Footer,
  },
  data() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
.bannerList {
  width: 1200px;
  height: 554px;
  margin: 0 auto;
  display: flex;
}
.banner_img {
  width: 790px;
  height: 554px;
}
.banner_img img {
  width: 100%;
  height: 100%;
}
.banner_right {
  width: 212px;
  border: 1px solid #c9c9c9;
}
.right1 {
  width: 100%;
  height: 152px;
  padding: 8px 6px;
  background-color: #ffffff;
  margin-bottom: 10px;
}
.right1_title {
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}
.right1_title .iconfont {
  font-size: 18px;
  margin-right: 10px;
}
.right2 {
  height: 185px;
  padding: 8px 6px;
  background-color: #ffffff;
  margin-bottom: 10px;
}
.right3 {
  height: 195px;
  padding: 8px 6px;
  background-color: #ffffff;
}
.index_main {
  width: 1200px;
  margin: 30px auto 0;
}
.main_title {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
}
.main_title_1 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}
.goods_main {
  width: 288px;
  height: 430px;
  background-color: #fff;
  padding: 14px 14px;
}
.good_img {
  width: 260px;
  height: 260px;
  margin: 0 auto;
  position: relative;
  padding: 10px 10px;
}
.good_img img {
  display: block;
  width: 100%;
}
.good_img p {
  width: 76px;
  height: 30px;
  color: #5da71e;
  background: rgba(93, 167, 30, 0.2);
  border: 2px solid #5da71e;
  text-align: center;
  line-height: 30px;
  border-radius: 15px;
  position: absolute;
  right: 0;
  top: 0;
}
.good_des {
  font-weight: bold;
  text-align: center;
  color: #302d2c;
  margin-top: 26px;
  margin-bottom: 26px;
}
.price {
  text-align: center;
  color: #d44d44;
  font-size: 20px;
}
.price span {
  font-size: 14px;
  color: #969696;
  text-decoration: line-through;
  margin-left: 16px;
}
.tips {
  width: 589px;
  height: 430px;
  margin-right: 20px;
}
.tips img {
  width: 100%;
  height: 100%;
}
.hotList {
  width: 288px;
  height: 250px;
  padding-top: 41px;
  background: rgba(93, 167, 30, 0.4);
  margin-right: 16px;
}
.hot_main {
  width: 114px;
  height: 120px;
  margin: 0 auto;
}
.hot_main img {
  width: 100%;
  height: 100%;
  display: block;
}
.hotList p {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 14px;
}
</style>
