//配置路由
import Vue from "vue";
import VueRouter from "vue-router";

//使用插件
Vue.use(VueRouter);

//引入路由组件
import Search from "@/pages/Search/index.vue";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import home from "@/store/home";

//配置路由
export default new VueRouter({

  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return{y:0}
  },
  //配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      name:"home",
      //   配置路由元信息
      meta: { show: true },
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      path: "/detail/:skuid",
      component: Detail,
      meta: { show: true },
    },
    //重定向:项目跑起来的时候重定向到首页
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
