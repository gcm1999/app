<template>
  <div class="outer">
    <!-- <el-button type="primary">测试</el-button> -->
    <div class="pay-main">
      <div class="pay-container">
        <div class="checkout-tit">
          <h4 class="tit-txt">
            <span class="success-icon"></span>
            <span class="success-info"
              >订单提交成功，请您及时付款，以便尽快为您发货~~</span
            >
          </h4>
          <div class="paymark">
            <span class="fl"
              >请您在提交订单<em class="orange time">4小时</em
              >之内完成支付，超时订单会自动取消。订单号：<em>{{
                orderId
              }}</em></span
            >
            <span class="fr"
              ><em class="lead">应付金额：</em
              ><em class="orange money">￥{{ orderInfo.totalFee }}</em></span
            >
          </div>
        </div>
        <div class="checkout-info">
          <h4>重要说明：</h4>
          <ol>
            <li>
              尚品汇商城支付平台目前支持<span class="zfb">支付宝</span
              >支付方式。
            </li>
            <li>其它支付渠道正在调试中，敬请期待。</li>
            <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
          </ol>
          <h4>
            支付宝账户信息：（很重要，<span class="save">请保存！！！</span>）
          </h4>
          <ul>
            <li>支付帐号：11111111</li>
            <li>密码：111111</li>
            <li>支付密码：111111</li>
          </ul>
        </div>
        <div class="checkout-steps">
          <div class="step-tit">
            <h5>支付平台</h5>
          </div>
          <div class="step-cont">
            <ul class="payType">
              <li><img src="./images/pay2.jpg" /></li>
              <li><img src="./images/pay3.jpg" /></li>
            </ul>
          </div>
          <div class="hr"></div>

          <div class="payshipInfo">
            <div class="step-tit">
              <h5>支付网银</h5>
            </div>
            <div class="step-cont">
              <ul class="payType">
                <li><img src="./images/pay10.jpg" /></li>
                <li><img src="./images/pay11.jpg" /></li>
                <li><img src="./images/pay12.jpg" /></li>
                <li><img src="./images/pay13.jpg" /></li>
                <li><img src="./images/pay14.jpg" /></li>
                <li><img src="./images/pay15.jpg" /></li>
                <li><img src="./images/pay16.jpg" /></li>
                <li><img src="./images/pay17.jpg" /></li>
                <li><img src="./images/pay18.jpg" /></li>
                <li><img src="./images/pay19.jpg" /></li>
                <li><img src="./images/pay20.jpg" /></li>
                <li><img src="./images/pay21.jpg" /></li>
                <li><img src="./images/pay22.jpg" /></li>
              </ul>
            </div>
          </div>
          <div class="hr"></div>

          <div class="submit">
            <!-- <router-link class="btn" to="/paysuccess">立即支付</router-link> -->
            <a class="btn" @click="open">立即支付</a>
          </div>
          <div class="otherpay">
            <div class="step-tit">
              <h5>其他支付方式</h5>
            </div>
            <div class="step-cont">
              <span><a href="weixinpay.html" target="_blank">微信支付</a></span>
              <span>中国银联</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  name: "Pay",
  data() {
    return {
      orderInfo: {},
      timer: null,
    };
  },
  computed: {
    orderId() {
      return this.$route.query.orderId;
    },
  },
  mounted() {
    this.$API.reqGetOrderInfo(this.orderId).then((res) => {
      // console.log(res);
      if (res.code == 200) {
        this.orderInfo = res.data;
      }
    });
  },
  methods: {
    async open() {
      // QRCode.toDataURL(this.orderInfo.codeUrl)
      //   .then((url) => {
      //     console.log(url);
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });
      let url = await QRCode.toDataURL(this.orderInfo.codeUrl);
      this.$alert(`<img src=${url} />`, "请使用微信扫码支付", {
        dangerouslyUseHTMLString: true,
        center: true,
        showCancelButton: true,
        cancelButtonText: "支付遇到问题",
        confirmButtonText: "我已支付成功",
        showClose: false,
      });

      if (!this.timer) {
        this.timer = setInterval(async () => {
          let res = await this.$API.reqOrderStatus(this.orderId);
          console.log(res);
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
.pay-main {
  margin-bottom: 20px;
}
.pay-main .pay-container {
  margin: 0 auto;
  width: 1200px;
}
.pay-main .pay-container a:hover {
  color: #4cb9fc;
}
.pay-main .pay-container .orange {
  color: #e1251b;
}
.pay-main .pay-container .money {
  font-size: 18px;
}
.pay-main .pay-container .zfb {
  color: #e1251b;
  font-weight: 700;
}
.pay-main .pay-container .checkout-tit {
  padding: 10px;
}
.pay-main .pay-container .checkout-tit .tit-txt {
  font-size: 14px;
  line-height: 21px;
}
.pay-main .pay-container .checkout-tit .tit-txt .success-icon {
  width: 30px;
  height: 30px;
  display: inline-block;
  background: url(./images/icon.png) no-repeat 0 0;
}
.pay-main .pay-container .checkout-tit .tit-txt .success-info {
  padding: 0 8px;
  line-height: 30px;
  vertical-align: top;
}
.pay-main .pay-container .checkout-tit .paymark {
  overflow: hidden;
  line-height: 26px;
  text-indent: 38px;
}
.pay-main .pay-container .checkout-tit .paymark .fl {
  float: left;
}
.pay-main .pay-container .checkout-tit .paymark .fr {
  float: right;
}
.pay-main .pay-container .checkout-tit .paymark .fr .lead {
  margin-bottom: 18px;
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
}
.pay-main .pay-container .checkout-info {
  padding-left: 25px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  border: 2px solid #e1251b;
}
.pay-main .pay-container .checkout-info h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 21px;
  color: #e1251b;
}
.pay-main .pay-container .checkout-info ol {
  padding-left: 25px;
  list-style-type: decimal;
  line-height: 24px;
  font-size: 14px;
}
.pay-main .pay-container .checkout-info ul {
  padding-left: 25px;
  list-style-type: disc;
  line-height: 24px;
  font-size: 14px;
}
.pay-main .pay-container .checkout-steps {
  border: 1px solid #ddd;
  padding: 25px;
}
.pay-main .pay-container .checkout-steps .hr {
  height: 1px;
  background-color: #ddd;
}
.pay-main .pay-container .checkout-steps .step-tit {
  line-height: 36px;
  margin: 15px 0;
}
.pay-main .pay-container .checkout-steps .step-cont {
  margin: 0 10px 12px 20px;
}
.pay-main .pay-container .checkout-steps .step-cont ul {
  font-size: 0;
}
.pay-main .pay-container .checkout-steps .step-cont ul li {
  margin: 2px;
  display: inline-block;
  padding: 5px 20px;
  border: 1px solid #ddd;
  cursor: pointer;
  line-height: 18px;
}
.pay-main .pay-container .submit {
  text-align: center;
}
.pay-main .pay-container .submit .btn {
  display: inline-block;
  padding: 15px 45px;
  margin: 15px 0 10px;
  font: 18px "微软雅黑";
  font-weight: 700;
  border-radius: 0;
  background-color: #e1251b;
  border: 1px solid #e1251b;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
}
.footer {
  background-color: #eaeaea;
}
.footer .footer-container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.footer .footer-container .footerList {
  padding: 20px;
  border-bottom: 1px solid #e4e1e1;
  border-top: 1px solid #e4e1e1;
  overflow: hidden;
  padding-left: 40px;
}
.footer .footer-container .footerList .footerItem {
  width: 16.6666667%;
  float: left;
}
.footer .footer-container .footerList .footerItem h4 {
  font-size: 14px;
}
.footer .footer-container .footerList .footerItem .footerItemCon li {
  line-height: 18px;
}
.footer .footer-container .footerList .footerItem:last-child img {
  width: 121px;
}
.footer .footer-container .copyright {
  padding: 20px;
}
.footer .footer-container .copyright .helpLink {
  text-align: center;
}
.footer .footer-container .copyright .helpLink li {
  display: inline;
}
.footer .footer-container .copyright .helpLink li .space {
  border-left: 1px solid #666;
  width: 1px;
  height: 13px;
  background: #666;
  margin: 8px 10px;
}
.footer .footer-container .copyright p {
  margin: 10px 0;
  text-align: center;
}
</style>
