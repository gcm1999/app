<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div
        class="address clearFix"
        v-for="(userAddress, index) in userAddressList"
        :key="userAddress.index"
        v-if="!userAddress.consignee.match('你')"
        @click="selectedAddress(index)"
      >
        <span class="username" :class="{ selected: index == currentIndex }">{{
          userAddress.consignee
        }}</span>
        <p>
          <span class="s1">{{ userAddress.fullAddress }}</span>
          <span class="s2">{{ userAddress.phoneNum }}</span>
          <span class="s3" v-show="userAddress.isDefault == '1'">默认地址</span>
        </p>
      </div>
      <!-- <div class="address clearFix">
        <span class="username selected">李四</span>
        <p>
          <span class="s1">北京市昌平区宏福科技园综合楼6层</span>
          <span class="s2">13590909098</span>
          <span class="s3">默认地址</span>
        </p>
      </div>
      <div class="address clearFix">
        <span class="username selected">王五</span>
        <p>
          <span class="s1">北京市昌平区宏福科技园综合楼6层</span>
          <span class="s2">18012340987</span>
          <span class="s3">默认地址</span>
        </p>
      </div> -->
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left: 5px">货到付款</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul
          class="list clearFix"
          v-for="(detail, index) in userOrder.detailArrayList"
          :key="detail.id"
        >
          <li>
            <img src="./images/goods.png" alt="" />
          </li>
          <li>
            <p>
              {{ detail.skuName }}
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{ detail.orderPrice }}.00</h3>
          </li>
          <li>X{{ detail.skuNum }}</li>
          <li>有货</li>
        </ul>
        <!-- <ul class="list clearFix">
          <li>
            <img src="./images/goods.png" alt="" />
          </li>
          <li>
            <p>
              Apple iPhone 6s (A1700) 64G 玫瑰金色
              移动联通电信4G手机硅胶透明防摔软壳 本色系列
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥5399.00</h3>
          </li>
          <li>X1</li>
          <li>有货</li>
        </ul> -->
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ userOrder.totalNum }}</i
            >件商品，总商品金额</b
          >
          <span>¥{{ userOrder.totalAmount }}</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额:　<span>¥{{ userOrder.totalAmount }}</span>
      </div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ currentAddrss.fullAddress }}</span>
        收货人：<span>{{ currentAddrss.consignee }}</span>
        <span>{{ currentAddrss.phoneNum }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <!-- <router-link class="subBtn" to="/pay">提交订单</router-link> -->
      <a class="subBtn" @click="submitOrder">提交订单</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Trade",
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {
    this.$store.dispatch("getUserAddressList");
    this.$store.dispatch("getUserOrder");
  },
  computed: {
    // ...mapState(["userAddressList", "userOrder"]),
    ...mapState({
      userAddressList: (state) => state.trade.userAddressList,
      userOrder: (state) => state.trade.userOrder,
    }),
    currentAddrss() {
      return this.userAddressList[this.currentIndex] || {};
    },
    // userAddressList() {
    //   return this.$store.state.trade.userAddressList;
    // },
    // userOrder() {
    //   return this.$store.state.trade.userOrder;
    // },
  },
  methods: {
    selectedAddress(index) {
      // alert(111);
      this.currentIndex = index;
    },
    submitOrder() {
      let tradeNo = this.userOrder.tradeNo;
      // console.log(tradeNo);
      let data = {
        consignee: this.currentAddrss.consignee,
        consigneeTel: this.currentAddrss.phoneNum,
        deliveryAddress: this.currentAddrss.fullAddress,
        paymentWay: "ONLINE",
        orderComment: "xxx",
        orderDetailList: this.userOrder.detailArrayList,
      };
      // console.log(data);
      this.$API.reqSubmitOrder(tradeNo, data).then(
        (res) => {
          // console.log("res");
          // console.log(res);
          if (res.code == 200) {
            this.$router.push(`/pay?orderId=${res.data}`);
          }
        },
        (rej) => {
          console.log("rej");
          console.log(rej);
        }
      );
      // console.log(res);
    },
  },
};
</script>

<style scoped>
.title {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 21px;
}
.content {
  width: 1200px;
  margin: 10px auto 0;
  border: 1px solid #dddddd;
  padding: 25px;
  box-sizing: border-box;
}
.content .receive,
.content .pay {
  line-height: 36px;
  margin: 18px 0;
}
.content .address {
  padding-left: 20px;
  margin-bottom: 15px;
}
.content .address .username {
  float: left;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #ddd;
  position: relative;
}
.content .address .username::after {
  content: "";
  display: none;
  width: 13px;
  height: 13px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: url(./images/choosed.png) no-repeat;
}
.content .address .username.selected {
  border-color: #e1251b;
}
.content .address .username.selected::after {
  display: block;
}
.content .address p {
  width: 610px;
  float: left;
  line-height: 30px;
  margin-left: 10px;
  padding-left: 5px;
  cursor: pointer;
}
.content .address p .s1 {
  float: left;
}
.content .address p .s2 {
  float: left;
  margin: 0 5px;
}
.content .address p .s3 {
  float: left;
  width: 56px;
  height: 24px;
  line-height: 24px;
  margin-left: 10px;
  background-color: #878787;
  color: #fff;
  margin-top: 3px;
  text-align: center;
}
.content .address p:hover {
  background-color: #ddd;
}
.content .line {
  height: 1px;
  background-color: #ddd;
}
.content .way {
  width: 1080px;
  height: 110px;
  background: #f4f4f4;
  padding: 15px;
  margin: 0 auto;
}
.content .way h5 {
  line-height: 50px;
}
.content .way .info {
  margin-top: 20px;
}
.content .way .info .s1 {
  float: left;
  border: 1px solid #ddd;
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 10px;
}
.content .way .info p {
  line-height: 30px;
}
.content .detail {
  width: 1080px;
  background: #feedef;
  padding: 15px;
  margin: 2px auto 0;
}
.content .detail h5 {
  line-height: 50px;
}
.content .detail .list {
  display: flex;
  justify-content: space-between;
}
.content .detail .list li {
  line-height: 30px;
}
.content .detail .list li p {
  margin-bottom: 20px;
}
.content .detail .list li h4 {
  color: #c81623;
  font-weight: 400;
}
.content .detail .list li h3 {
  color: #e12228;
}
.content .bbs {
  margin-bottom: 15px;
}
.content .bbs h5 {
  line-height: 50px;
}
.content .bbs textarea {
  width: 100%;
  border-color: #e4e2e2;
  line-height: 1.8;
  outline: none;
  resize: none;
}
.content .bill h5 {
  line-height: 50px;
}
.content .bill div {
  padding-left: 15px;
}
.money {
  width: 1200px;
  margin: 20px auto;
}
.money ul {
  width: 220px;
  float: right;
}
.money ul li {
  line-height: 30px;
  display: flex;
  justify-content: space-between;
}
.money ul li i {
  color: red;
}
.trade {
  box-sizing: border-box;
  width: 1200px;
  padding: 10px;
  margin: 10px auto;
  text-align: right;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
}
.trade div {
  line-height: 30px;
}
.trade .price span {
  color: #e12228;
  font-weight: 700;
  font-size: 14px;
}
.trade .receiveInfo {
  color: #999;
}
.sub {
  width: 1200px;
  margin: 0 auto 10px;
}
.sub .subBtn {
  float: right;
  width: 164px;
  height: 56px;
  font: 700 18px "微软雅黑";
  line-height: 56px;
  text-align: center;
  color: #fff;
  background-color: #e1251b;
}
</style>
