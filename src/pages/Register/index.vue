<template>
  <!-- 项目的最外层 -->
  <div class="outer">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去
          <!-- <a href="login.html" target="_blank">登陆</a> -->
          <router-link to="/login">登录</router-link>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="phone" />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="code" />
        <button style="width: 100px; height: 38px" @click="getCode">
          获取验证码
        </button>
        <!-- <img
          ref="code"
          src="http://182.92.128.115/api/user/passport/code"
          alt="code"
        /> -->
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input v-model="password" type="text" placeholder="请输入你的登录密码" />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input v-model="password1" type="text" placeholder="请输入确认密码" />
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="controls">
        <input name="m1" type="checkbox" />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg">错误提示信息</span>
      </div>
      <div class="btn">
        <button @click="userRegister">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      code: "",
      password: '',
      password1:'',
    };
  },
  methods: {
    async getCode() {
      // console.log(this);
      // 如果获取到验证码
      try {
        const { phone } = this;
        phone && await this.$store.dispatch("getCode", phone);
        // 将组件的code属性值变为仓库的验证码
        this.code = this.$store.state.user.code;
      } catch (error) {}
    },
    async userRegister() {
      try {
        const { phone, code, password, password1 } = this;
        (phone && code && password == password1 && await this.$store.dispatch('userRegister', { phone, password, code }));
        this.$router.push('/login');
      } catch (error) {
        alert(error.message);
      }
      
    }
  },
};
</script>
<style scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
}
.register h3 {
  background: #ececec;
  margin: 0;
  padding: 6px 15px;
  color: #333;
  border-bottom: 1px solid #dfdfdf;
  font-size: 20.04px;
  line-height: 30.06px;
}
.register h3 span {
  font-size: 14px;
  float: right;
}
.register h3 span a {
  color: #e1251b;
}
.register div:nth-of-type(1) {
  margin-top: 40px;
}
.register .content {
  padding-left: 390px;
  margin-bottom: 18px;
  position: relative;
}
.register .content label {
  font-size: 14px;
  width: 96px;
  text-align: right;
  display: inline-block;
}
.register .content input {
  width: 270px;
  height: 38px;
  padding-left: 8px;
  box-sizing: border-box;
  margin-left: 5px;
  outline: none;
  border: 1px solid #999;
}
.register .content img {
  vertical-align: sub;
}
.register .content .error-msg {
  position: absolute;
  top: 100%;
  left: 495px;
  color: red;
}
.register .controls {
  text-align: center;
  position: relative;
}
.register .controls input {
  vertical-align: middle;
}
.register .controls .error-msg {
  position: absolute;
  top: 100%;
  left: 495px;
  color: red;
}
.register .btn {
  text-align: center;
  line-height: 36px;
  margin: 17px 0 0 55px;
}
.register .btn button {
  outline: none;
  width: 270px;
  height: 36px;
  background: #e1251b;
  color: #fff !important;
  display: inline-block;
  font-size: 16px;
}
.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;
}
.copyright ul li {
  display: inline-block;
  border-right: 1px solid #e4e4e4;
  padding: 0 20px;
  margin: 15px 0;
}
</style>
