import Vue from "vue";
import App from "./App.vue";
//三级联动组件---全局组件
import TypeNav from "@/components/TypeNav";
// 第一个参数:全局组件的名字 第二个参数:哪一个组件
Vue.component(TypeNav.name, TypeNav);
// 引入mockSerce.js---mock数据
import "@/mock/mockServe";

// 引入swiper样式
import "swiper/css/swiper.min.css";

//引入路由
import router from "@/router";
// 引入仓库
import store from "@/store";
// // 测试
// import { reqCategoryList } from '@/api';
// reqCategoryList();

// Vue.config.productionTip = false
// import {getReqSearchInfo} from "@/api/index";
// console.log(getReqSearchInfo({}));
let a;
new Vue({
  render: (h) => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
  },

  //注册路由,KV一致省略V
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  //$route:一般获取路由信息【路径、query、params等等】
  //$router:一般进行编程式导航进行路由跳转【push|replace】
  router,
  // 注册仓库:组件身上会多一个属性$store
  store,
}).$mount("#app");
