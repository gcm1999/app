//引入路由组件
import Search from "@/pages/Search/index.vue";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import Cart from "@/pages/Cart";
import AddCartSucess from "@/pages/AddCartSucess";
//配置路由
export default [
  {
    path: "/home",
    component: Home,
    name: "home",
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
  {
    path: "/cart",
    component: Cart,
    meta: { show: true },
  },
  {
    path: "/addCartSucess",
    component: AddCartSucess,
    meta: { show: true },
  },
  //重定向:项目跑起来的时候重定向到首页
  {
    path: "*",
    redirect: "/home",
  },
];
