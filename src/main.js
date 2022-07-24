import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/pages/Home/TypeNav';
// 第一个参数:全局组件的名字 第二个参数:哪一个组件
Vue.component(TypeNav.name,TypeNav)


//引入路由
import router from '@/router';
// 测试
import { reqCategoryList } from '@/api';
reqCategoryList();


// Vue.config.productionTip = false

let a;
new Vue({
  render: h => h(App),

  //注册路由,KV一致省略V
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  //$route:一般获取路由信息【路径、query、params等等】
  //$router:一般进行编程式导航进行路由跳转【push|replace】
  router,

}).$mount('#app')
