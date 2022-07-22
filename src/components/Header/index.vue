<template>
  <!-- 头部 -->
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <a href="###">登录</a>
            <a href="###" class="register">免费注册</a>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <a class="logo" title="尚品汇" href="###" target="_blank">
          <img src="./images/logo.png" alt="" />
        </a>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- lang="less"  识别less样式 -->
<style scoped>
.header .top p {
  float: left;
  margin-right: 10px;
}
.header .top p .register {
  border-left: 1px solid #b3aeae;
  padding: 0 5px;
  margin-left: 5px;
}
.header .top .typeList {
  float: right;
}
.header .top .typeList a {
  padding: 0 10px;
  border-left: 1px solid #b3aeae;
}

.header .bottom {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.header .logoArea {
  float: left;
}

.header .logo img {
  width: 175px;
  margin: 25px 45px;
}
.header .searchArea {
  float: right;
  margin-top: 35px;
}

.header .searchForm {
  overflow: hidden;
}

.header .searchForm input {
  box-sizing: border-box;
  width: 490px;
  height: 32px;
  padding: 0px 4px;
  border: 2px solid #ea4a36;
  float: left;
}

.header .searchForm input :focus {
  outline: none;
}

.header .searchArea button {
  height: 32px;
  width: 68px;
  background-color: #ea4a36;
  border: none;
  color: #fff;
  float: left;
  cursor: pointer;
}

.header .searchArea button:focus {
  outline: none;
}
</style>
