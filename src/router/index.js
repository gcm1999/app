//配置路由
import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

//使用插件
Vue.use(VueRouter);

//配置路由
let router = new VueRouter({
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
  routes,
});

// 导航守卫，全局前置首位
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  next();
  // console.log(to);
  if (token) {
    // 已登录去登陆页面，返回首页
    if (to.path == "/login") {
      next("/home");
    } else {
      // 已登录去非登录页面，检查用户名，存在放行，不存在派发action获取用户信息在跳转
      if (name) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          // token失效获取不到用户信息,重新登录
          // 清除token
          await store.dispatch("userLogout");
          next("/login");
        }
      }
      // next();
    }
  } else {
    if (
      to.path.indexOf("cart") != -1 ||
      to.path.indexOf("center") != -1 ||
      to.path.indexOf("pay") != -1
    ) {
      alert("先登录吧大哥");
      next("/login?redirect="+to.path);
      // next("login");
      // router.push("/login&redirect=" + to.path);
    }
  }
});

export default router;
