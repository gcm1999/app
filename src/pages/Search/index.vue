<template>
  <div class="outer">
    <!-- <h1>搜索</h1> -->
    <TypeNav></TypeNav>
    <!--list-content-->
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="searchParams.categoryName">
              {{ searchParams.categoryName
              }}<i @click="removeCategoryName">×</i>
            </li>
            <li class="with-x" v-if="searchParams.keyword">
              {{ searchParams.keyword }}<i @click="removeKeyword">×</i>
            </li>
            <li class="with-x" v-if="searchParams.trademark">
              {{ searchParams.trademark.split(":")[1]
              }}<i @click="removeTrademark">×</i>
            </li>
            <li class="with-x" v-for="(attr, index) in searchParams.props">
              {{ attr.split(":")[1] }}<i @click="removeAttr(index)">×</i>
            </li>
            <!-- <li class="with-x">iphone<i>×</i></li>
            <li class="with-x">华为<i>×</i></li>
            <li class="with-x">OPPO<i>×</i></li> -->
          </ul>
        </div>
        <!--selector-->
        <div class="clearfix selector">
          <div class="type-wrap logo">
            <div class="fl key brand">品牌</div>
            <div class="value logos">
              <ul class="logo-list">
                <li
                  v-for="(trademark, index) in searchInfo.trademarkList"
                  :key="trademark.tmId"
                  @click="trademarkHandle(trademark)"
                >
                  {{ trademark.tmName }}
                </li>
                <!-- <li>TCL</li>
                <li>长虹（CHANGHONG）</li>
                <li>飞利浦（PHILIPS）</li>
                <li>风行电视</li>
                <li><img src="./images/phone06.png" /></li>
                <li><img src="./images/phone07.png" /></li>
                <li><img src="./images/phone08.png" /></li>
                <li><img src="./images/phone09.png" /></li>
                <li><img src="./images/phone10.png" /></li>
                <li><img src="./images/phone11.png" /></li>
                <li><img src="./images/phone12.png" /></li>
                <li><img src="./images/phone12.png" /></li>
                <li><img src="./images/phone14.png" /></li>
                <li><img src="./images/phone01.png" /></li>
                <li><img src="./images/phone06.png" /></li>
                <li><img src="./images/phone07.png" /></li>
                <li><img src="./images/phone02.png" /></li> -->
              </ul>
            </div>
            <div class="ext">
              <a href="javascript:void(0);" class="sui-btn">多选</a>
              <a href="javascript:void(0);">更多</a>
            </div>
          </div>
          <div
            class="type-wrap"
            v-for="attr in searchInfo.attrsList"
            :key="attr.attrId"
          >
            <div class="fl key">{{ attr.attrName }}</div>
            <div class="fl value">
              <ul class="type-list">
                <li v-for="av in attr.attrValueList">
                  <a @click="attrHandle(attr, av)">{{ av }}</a>
                </li>
                <!-- <li>
                  <a>电信2G</a>
                </li>
                <li>
                  <a>电信3G</a>
                </li>
                <li>
                  <a>移动3G</a>
                </li>
                <li>
                  <a>联通3G</a>
                </li>
                <li>
                  <a>联通4G</a>
                </li>
                <li>
                  <a>电信3G</a>
                </li>
                <li>
                  <a>移动3G</a>
                </li>
                <li>
                  <a>联通3G</a>
                </li>
                <li>
                  <a>联通4G</a>
                </li> -->
              </ul>
            </div>
            <div class="fl ext"></div>
          </div>
          <!-- <div class="type-wrap">
            <div class="fl key">显示屏尺寸</div>
            <div class="fl value">
              <ul class="type-list">
                <li>
                  <a>4.0-4.9英寸</a>
                </li>
                <li>
                  <a>4.0-4.9英寸</a>
                </li>
              </ul>
            </div>
            <div class="fl ext"></div>
          </div>
          <div class="type-wrap">
            <div class="fl key">摄像头像素</div>
            <div class="fl value">
              <ul class="type-list">
                <li>
                  <a>1200万以上</a>
                </li>
                <li>
                  <a>800-1199万</a>
                </li>
                <li>
                  <a>1200-1599万</a>
                </li>
                <li>
                  <a>1600万以上</a>
                </li>
                <li>
                  <a>无摄像头</a>
                </li>
              </ul>
            </div>
            <div class="fl ext"></div>
          </div>
          <div class="type-wrap">
            <div class="fl key">价格</div>
            <div class="fl value">
              <ul class="type-list">
                <li>
                  <a>0-500元</a>
                </li>
                <li>
                  <a>500-1000元</a>
                </li>
                <li>
                  <a>1000-1500元</a>
                </li>
                <li>
                  <a>1500-2000元</a>
                </li>
                <li>
                  <a>2000-3000元 </a>
                </li>
                <li>
                  <a>3000元以上</a>
                </li>
              </ul>
            </div>
            <div class="fl ext"></div>
          </div>
          <div class="type-wrap">
            <div class="fl key">更多筛选项</div>
            <div class="fl value">
              <ul class="type-list">
                <li>
                  <a>特点</a>
                </li>
                <li>
                  <a>系统</a>
                </li>
                <li>
                  <a>手机内存 </a>
                </li>
                <li>
                  <a>单卡双卡</a>
                </li>
                <li>
                  <a>其他</a>
                </li>
              </ul>
            </div>
            <div class="fl ext"></div>
          </div> -->
        </div>
        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li class="active">
                  <a href="#">综合</a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li>
                  <a href="#">价格⬆</a>
                </li>
                <li>
                  <a href="#">价格⬇</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li
                class="yui3-u-1-5"
                v-for="(good, index) in searchInfo.goodsList"
                :key="index"
              >
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="item.html" target="_blank">
                      <!-- <img src="./images/mobile01.png" /> -->
                      <img :src="good.defaultImg" />
                    </a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ </em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <!-- <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    > -->
                    <a target="_blank" href="item.html" :title="good.title">{{
                      good.title
                    }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <!-- <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile02.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile03.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile04.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile05.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile06.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile01.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile02.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile03.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-5">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/mobile04.png" />
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>6088.00</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a
                      target="_blank"
                      href="item.html"
                      title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"
                      >Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)Apple苹果iPhone 6s (A1699)Apple苹果iPhone 6s
                      (A1699)</a
                    >
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a
                      href="success-cart.html"
                      target="_blank"
                      class="sui-btn btn-bordered btn-danger"
                      >加入购物车</a
                    >
                    <a href="javascript:void(0);" class="sui-btn btn-bordered"
                      >收藏</a
                    >
                  </div>
                </div>
              </li> -->
            </ul>
          </div>
          <!-- 分页器 -->
          <Pagination :pageNo="10" :pageSize="3" :total="66" :continues="5"></Pagination>
        </div>
        <!--hotsale-->
        <div class="clearfix hot-sale">
          <h4 class="title">热卖商品</h4>
          <div class="hot-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-4">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/like_01.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4088.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有700人评价</i>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-4">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/like_03.png" />
                  </div>
                  <div class="attr">
                    <em>金属A面，360°翻转，APP下单省300！</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4088.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有700人评价</i>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-4">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/like_04.png" />
                  </div>
                  <div class="attr">
                    <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4068.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有20人评价</i>
                  </div>
                </div>
              </li>
              <li class="yui3-u-1-4">
                <div class="list-wrap">
                  <div class="p-img">
                    <img src="./images/like_02.png" />
                  </div>
                  <div class="attr">
                    <em>Apple苹果iPhone 6s (A1699)</em>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>4088.00</i>
                    </strong>
                  </div>
                  <div class="commit">
                    <i class="command">已有700人评价</i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TypeNav from "@/components/TypeNav/index.vue";
import { mapState } from "vuex";
import Pagination from "../../components/Pagination/index.vue";

export default {
  name: "",
  components: { TypeNav, Pagination },
  computed: {
    ...mapState({
      searchInfo: (state) => state.search.searchInfo,
    }),
  },
  data() {
    return {
      searchParams: {
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        order: "",
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: "",
      },
    };
  },
  beforeMount() {
    Object.assign(this.searchParams, this.$route.params, this.$route.query);
  },
  mounted() {
    this.getSearchInfo();
  },
  methods: {
    getSearchInfo() {
      // console.log(this.searchParams);
      this.$store.dispatch("saveSearchInfo", this.searchParams);
    },
    removeCategoryName() {
      // console.log(this.$route.query.categoryName);
      // this.$route.query.categoryName = '';
      this.searchParams.categoryName = undefined;
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
      this.getSearchInfo();
      this.$router.push({ name: "search", params: this.$route.params });
    },
    removeKeyword() {
      this.searchParams.keyword = undefined;
      this.getSearchInfo();
      this.$bus.$emit("clear");
      this.$router.push({ name: "search", params: this.$route.query });
    },
    trademarkHandle(trademark) {
      // console.log(trademark);
      // let id = trademark.tmId;
      // let name = trademark.tmName;
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`;
      this.getSearchInfo();
    },
    removeTrademark() {
      this.searchParams.trademark = undefined;
      this.getSearchInfo();
    },
    attrHandle(attr, av) {
      // console.log(av);
      // console.log(attr);
      // console.log(this.searchParams.props);
      let props = `${attr.attrId}:${av}:${attr.attrName}`;
      if (this.searchParams.props.indexOf(props) == -1) {
        this.searchParams.props.push(props);
        this.getSearchInfo();
      }

    },
    removeAttr(index) {
      // 从数组索引index处删除一项数据
      this.searchParams.props.splice(index, 1);
      this.getSearchInfo();

    },
  },
  watch: {
    $route(oldV, newV) {
      Object.assign(this.searchParams, this.$route.params, this.$route.query);

      this.getSearchInfo();
      this.searchParams.category1Id = undefined;
      this.searchParams.category2Id = undefined;
      this.searchParams.category3Id = undefined;
    },
  },
};
</script>
<style scoped>
.outer .main {
  margin: 10px 0;
}
.outer .main .py-container {
  width: 1200px;
  margin: 0 auto;
}
.outer .main .py-container .bread {
  margin-bottom: 5px;
  overflow: hidden;
}
.outer .main .py-container .bread .sui-breadcrumb {
  padding: 3px 15px;
  margin: 0;
  font-weight: 400;
  border-radius: 3px;
  float: left;
}
.outer .main .py-container .bread .sui-breadcrumb li {
  display: inline-block;
  line-height: 18px;
}
.outer .main .py-container .bread .sui-breadcrumb li a {
  color: #666;
  text-decoration: none;
}
.outer .main .py-container .bread .sui-breadcrumb li a:hover {
  color: #4cb9fc;
}
.outer .main .py-container .bread .sui-tag {
  margin-top: -5px;
  list-style: none;
  font-size: 0;
  line-height: 0;
  padding: 5px 0 0;
  margin-bottom: 18px;
  float: left;
}
.outer .main .py-container .bread .sui-tag .with-x {
  font-size: 12px;
  margin: 0 5px 5px 0;
  display: inline-block;
  overflow: hidden;
  color: #000;
  background: #f7f7f7;
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #dedede;
  white-space: nowrap;
  transition: color 400ms;
  cursor: pointer;
}
.outer .main .py-container .bread .sui-tag .with-x i {
  margin-left: 10px;
  cursor: pointer;
  font: 400 14px tahoma;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.outer .main .py-container .bread .sui-tag .with-x:hover {
  color: #28a3ef;
}
.outer .main .py-container .selector {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  overflow: hidden;
}
.outer .main .py-container .selector .logo {
  border-top: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
}
.outer .main .py-container .selector .logo .key {
  padding-bottom: 87px !important;
}
.outer .main .py-container .selector .type-wrap {
  margin: 0;
  position: relative;
  border-top: 1px solid #ddd;
  overflow: hidden;
}
.outer .main .py-container .selector .type-wrap .key {
  width: 100px;
  background: #f1f1f1;
  line-height: 26px;
  text-align: right;
  padding: 10px 10px 0 15px;
  float: left;
}
.outer .main .py-container .selector .type-wrap .value {
  overflow: hidden;
  padding: 10px 0 0 15px;
  color: #333;
  margin-left: 120px;
  padding-right: 90px;
}
.outer .main .py-container .selector .type-wrap .value .logo-list li {
  cursor: pointer;
  float: left;
  border: 1px solid #e4e4e4;
  margin: -1px -1px 0 0;
  width: 105px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  color: #e1251b;
  font-style: italic;
  font-size: 14px;
}
.outer .main .py-container .selector .type-wrap .value .logo-list li img {
  max-width: 100%;
  vertical-align: middle;
}
.outer .main .py-container .selector .type-wrap .value .type-list li {
  float: left;
  display: block;
  margin-right: 30px;
  line-height: 26px;
}
.outer .main .py-container .selector .type-wrap .value .type-list li a {
  text-decoration: none;
  color: #666;
}
.outer .main .py-container .selector .type-wrap .ext {
  position: absolute;
  top: 10px;
  right: 10px;
}
.outer .main .py-container .selector .type-wrap .ext .sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #d5d5d5;
}
.outer .main .py-container .selector .type-wrap .ext a {
  color: #666;
}
.outer .main .py-container .details {
  margin-bottom: 5px;
}
.outer .main .py-container .details .sui-navbar {
  overflow: visible;
  margin-bottom: 0;
}
.outer .main .py-container .details .sui-navbar .filter {
  min-height: 40px;
  padding-right: 20px;
  background: #fbfbfb;
  border: 1px solid #e2e2e2;
  padding-left: 0;
  border-radius: 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav {
  position: relative;
  left: 0;
  display: block;
  float: left;
  margin: 0 10px 0 0;
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav li {
  float: left;
  line-height: 18px;
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav li a {
  display: block;
  cursor: pointer;
  padding: 11px 15px;
  color: #777;
  text-decoration: none;
}
.outer .main .py-container .details .sui-navbar .filter .sui-nav li.active a {
  background: #e1251b;
  color: #fff;
}
.outer .main .py-container .details .goods-list {
  margin: 20px 0;
}
.outer .main .py-container .details .goods-list ul {
  display: flex;
  flex-wrap: wrap;
}
.outer .main .py-container .details .goods-list ul li {
  height: 100%;
  width: 20%;
  margin-top: 10px;
  line-height: 28px;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .p-img {
  padding-left: 15px;
  width: 215px;
  height: 255px;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .p-img a {
  color: #666;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .p-img a img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .price {
  padding-left: 15px;
  font-size: 18px;
  color: #c81623;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .price
  strong
  i {
  margin-left: -5px;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .attr {
  padding-left: 15px;
  width: 85%;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .attr a {
  color: #333;
  text-decoration: none;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .commit {
  padding-left: 15px;
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .commit span {
  font-weight: 700;
  color: #646fb0;
}
.outer .main .py-container .details .goods-list ul li .list-wrap .operate {
  padding: 12px 15px;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .sui-btn {
  display: inline-block;
  padding: 2px 14px;
  box-sizing: border-box;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 0;
  background-color: transparent;
  margin-right: 15px;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered {
  min-width: 85px;
  background-color: transparent;
  border: 1px solid #8c8c8c;
  color: #8c8c8c;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-bordered:hover {
  border: 1px solid #666;
  color: #fff !important;
  background-color: #666;
  text-decoration: none;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-danger {
  border: 1px solid #e1251b;
  color: #e1251b;
}
.outer
  .main
  .py-container
  .details
  .goods-list
  ul
  li
  .list-wrap
  .operate
  .btn-danger:hover {
  border: 1px solid #e1251b;
  background-color: #e1251b;
  color: white !important;
  text-decoration: none;
}

.outer .main .py-container .hot-sale {
  margin-bottom: 5px;
  border: 1px solid #ddd;
}
.outer .main .py-container .hot-sale .title {
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  border-bottom: 1px solid #ddd;
  background: #f1f1f1;
  color: #333;
  margin: 0;
  padding: 5px 0 5px 15px;
}
.outer .main .py-container .hot-sale .hot-list {
  padding: 15px;
}
.outer .main .py-container .hot-sale .hot-list ul {
  display: flex;
}
.outer .main .py-container .hot-sale .hot-list ul li {
  width: 25%;
  height: 100%;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .p-img,
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price,
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .attr,
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .commit {
  padding-left: 15px;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .p-img img {
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .attr {
  width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 8px;
  min-height: 38px;
  cursor: pointer;
  line-height: 1.8;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price {
  font-size: 18px;
  color: #c81623;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .price strong {
  font-weight: 700;
}
.outer
  .main
  .py-container
  .hot-sale
  .hot-list
  ul
  li
  .list-wrap
  .price
  strong
  i {
  margin-left: -5px;
}
.outer .main .py-container .hot-sale .hot-list ul li .list-wrap .commit {
  height: 22px;
  font-size: 13px;
  color: #a7a7a7;
}
</style>
