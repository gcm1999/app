<template>
  <div>
    <!-- 购物车列表 -->
    <div class="cart">
      <h4>全部商品</h4>
      <div class="cart-main">
        <div class="cart-th">
          <div class="cart-th1">全部</div>
          <div class="cart-th2">商品</div>
          <div class="cart-th3">单价（元）</div>
          <div class="cart-th4">数量</div>
          <div class="cart-th5">小计（元）</div>
          <div class="cart-th6">操作</div>
        </div>
        <div class="cart-body">
          <ul
            class="cart-list"
            v-for="(goodInfo, index) in cartInfoList"
            :key="goodInfo.id"
          >
            <li class="cart-list-con1">
              <input
                type="checkbox"
                name="chk_list"
                :checked="(goodInfo.isChecked = '1')"
                @change="changeChenced(goodInfo, $event)"
              />
            </li>
            <li class="cart-list-con2">
              <img :src="goodInfo.imgUrl" />
              <div class="item-msg">
                {{ goodInfo.skuName }}
              </div>
            </li>
            <!-- <li class="cart-list-con3">
              <div class="item-txt">语音升级款</div>
            </li> -->
            <li class="cart-list-con4">
              <span class="price">{{ goodInfo.skuPrice }}</span>
            </li>
            <li class="cart-list-con5">
              <a
                href="javascript:void(0)"
                class="mins"
                @click="updateSkuNum(goodInfo.skuId, goodInfo.skuNum, -1)"
                >-</a
              >
              <input
                autocomplete="off"
                type="text"
                :value="goodInfo.skuNum"
                minnum="1"
                class="itxt"
                disabled="disabled"
              />
              <a
                href="javascript:void(0)"
                class="plus"
                @click="updateSkuNum(goodInfo.skuId, goodInfo.skuNum, 1)"
                >+</a
              >
            </li>
            <li class="cart-list-con6">
              <span class="sum">{{ goodInfo.skuPrice * goodInfo.skuNum }}</span>
            </li>
            <li class="cart-list-con7">
              <a
                href="#none"
                class="sindelet"
                @click="deleteCart(goodInfo.skuId)"
                >删除</a
              >
              <br />
              <a href="#none">移到收藏</a>
            </li>
          </ul>

          <!-- <ul class="cart-list">
            <li class="cart-list-con1">
              <input type="checkbox" name="chk_list" id="" value="" />
            </li>
            <li class="cart-list-con2">
              <img src="./images/goods2.png" />
              <div class="item-msg">
                华为（MIJIA） 华为metaPRO 30 浴霸4摄像 超清晰
              </div>
            </li>
            <li class="cart-list-con3">
              <div class="item-txt">黑色版本</div>
            </li>
            <li class="cart-list-con4">
              <span class="price">5622.00</span>
            </li>
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input
                autocomplete="off"
                type="text"
                value="1"
                minnum="1"
                class="itxt"
              />
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">5622</span>
            </li>
            <li class="cart-list-con7">
              <a href="#none" class="sindelet">删除</a>
              <br />
              <a href="#none">移到收藏</a>
            </li>
          </ul>

          <ul class="cart-list">
            <li class="cart-list-con1">
              <input type="checkbox" name="chk_list" id="" value="" />
            </li>
            <li class="cart-list-con2">
              <img src="./images/goods3.png" />
              <div class="item-msg">
                iphone 11 max PRO 苹果四摄 超清晰 超费电 超及好用
              </div>
            </li>
            <li class="cart-list-con3">
              <div class="item-txt">墨绿色</div>
            </li>
            <li class="cart-list-con4">
              <span class="price">11399.00</span>
            </li>
            <li class="cart-list-con5">
              <a href="javascript:void(0)" class="mins">-</a>
              <input
                autocomplete="off"
                type="text"
                value="1"
                minnum="1"
                class="itxt"
              />
              <a href="javascript:void(0)" class="plus">+</a>
            </li>
            <li class="cart-list-con6">
              <span class="sum">11399</span>
            </li>
            <li class="cart-list-con7">
              <a href="#none" class="sindelet">删除</a>
              <br />
              <a href="#none">移到收藏</a>
            </li>
          </ul> -->
        </div>
      </div>
      <div class="cart-tool">
        <div class="select-all">
          <input class="chooseAll" type="checkbox" />
          <span>全选</span>
        </div>
        <div class="option">
          <a href="#none">删除选中的商品</a>
          <a href="#none">移到我的关注</a>
          <a href="#none">清除下柜商品</a>
        </div>
        <div class="money-box">
          <div class="chosed">
            已选择 <span>{{ cartInfoList.length }}</span
            >件商品
          </div>
          <div class="sumprice">
            <em>总价（不含运费） ：</em>
            <i class="summoney">0</i>
          </div>
          <div class="sumbtn">
            <a class="sum-btn" target="_blank" @click="$router.push('/trade')">结算</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  mounted() {
    this.getCartInfoList();
  },
  methods: {
    getCartInfoList() {
      this.$store.dispatch("getCartList");
    },
    async deleteCart(skuId) {
      try {
        await this.$store.dispatch("deleteCart", skuId);
        this.$store.dispatch("getCartList");
      } catch (error) {}
    },
    async updateSkuNum(skuId, skuNum, count) {
      try {
        if (count == -1 && skuNum == 1) {
          // console.log(111);
          count = 0;
        }
        await this.$store.dispatch("addCart", { skuId, skuNum:count });
        this.$store.dispatch("getCartList");
      } catch (error) {}
    },
    async changeChenced(goodInfo, e) {
      console.log(e);
      try {
        let isChecked = e.target.checked ? "1" : "0";
        await this.$store.dispatch("changeChecked", {
          skuID: goodInfo.skuId,
          isChecked,
        });
        this.getCartInfoList();
      } catch (error) {}
    },
  },
  computed: {
    ...mapGetters(["cartList"]),
    // ...mapGetters(["cartInfoList"]),
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
  },
  // watch: {
  //   cartInfoList: {
  //     handler(newValue, oldValue) {},
  //   },
  // },
};
</script>
<style scoped>
.cart {
  width: 1200px;
  margin: 0 auto;
}
.cart h4 {
  margin: 9px 0;
  font-size: 14px;
  line-height: 21px;
}
.cart .cart-main .cart-th {
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  overflow: hidden;
}
.cart .cart-main .cart-th > div {
  float: left;
}
.cart .cart-main .cart-th .cart-th1 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th1 input {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th1 span {
  vertical-align: middle;
}
.cart .cart-main .cart-th .cart-th2 {
  width: 25%;
}
.cart .cart-main .cart-th .cart-th3,
.cart .cart-main .cart-th .cart-th4,
.cart .cart-main .cart-th .cart-th5,
.cart .cart-main .cart-th .cart-th6 {
  width: 12.5%;
}
.cart .cart-main .cart-body {
  margin: 15px 0;
  border: 1px solid #ddd;
}
.cart .cart-main .cart-body .cart-list {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
}
.cart .cart-main .cart-body .cart-list > li {
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con1 {
  width: 14.1667%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 {
  width: 35%;
  text-align: center;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 img {
  width: 82px;
  height: 82px;
  float: left;
}
.cart .cart-main .cart-body .cart-list .cart-list-con2 .item-msg {
  float: left;
  width: 150px;
  margin: 0 10px;
  line-height: 18px;
}
/* .cart .cart-main .cart-body .cart-list .cart-list-con3 {
  width: 20.8333%;
} */
.cart .cart-main .cart-body .cart-list .cart-list-con3 .item-txt {
  text-align: center;
}
.cart .cart-main .cart-body .cart-list .cart-list-con4 {
  width: 12.5%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 {
  width: 12.5%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .mins {
  border: 1px solid #ddd;
  border-right: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 input {
  border: 1px solid #ddd;
  width: 40px;
  height: 33px;
  float: left;
  text-align: center;
  font-size: 14px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con5 .plus {
  border: 1px solid #ddd;
  border-left: 0;
  float: left;
  color: #666;
  width: 6px;
  text-align: center;
  padding: 8px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 {
  width: 12.5%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con6 .sum {
  font-size: 16px;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 {
  width: 12.5%;
}
.cart .cart-main .cart-body .cart-list .cart-list-con7 a {
  color: #666;
}
.cart .cart-tool {
  overflow: hidden;
  border: 1px solid #ddd;
}
.cart .cart-tool .select-all {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .select-all span {
  vertical-align: middle;
}
.cart .cart-tool .select-all input {
  vertical-align: middle;
}
.cart .cart-tool .option {
  padding: 10px;
  overflow: hidden;
  float: left;
}
.cart .cart-tool .option a {
  float: left;
  padding: 0 10px;
  color: #666;
}
.cart .cart-tool .money-box {
  float: right;
}
.cart .cart-tool .money-box .chosed {
  line-height: 26px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice {
  width: 200px;
  line-height: 22px;
  float: left;
  padding: 0 10px;
}
.cart .cart-tool .money-box .sumprice .summoney {
  color: #c81623;
  font-size: 16px;
}
.cart .cart-tool .money-box .sumbtn {
  float: right;
}
.cart .cart-tool .money-box .sumbtn a {
  display: block;
  position: relative;
  width: 96px;
  height: 52px;
  line-height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  background: #e1251b;
  overflow: hidden;
}
</style>
