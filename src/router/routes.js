//引入一级路由组件
import Search from "@/pages/Search/index.vue";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import Cart from "@/pages/Cart";
import AddCartSucess from "@/pages/AddCartSucess";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
//引入二级路由组件
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";
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
    name: "addCartSucess",
    meta: { show: true },
  },
  {
    path: "/trade",
    component: Trade,
    name: "trade",
    meta: { show: true },
  },
  {
    path: "/pay",
    component: Pay,
    name: "pay",
    meta: { show: true },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    name: "paysuccess",
    meta: { show: true },
  },
  {
    path: "/center",
    component: Center,
    name: "center",
    meta: { show: true },
    // 二级路由组件
    children: [
      {
        path: "/center/myorder",
        component: MyOrder,
      },
      {
        path: "/center/grouporder",
        component: GroupOrder,
      },
      // 重定向
      {
        path: "/center",
        redirect:"/center/myorder"
      },
    ],
  },
  // {
  //   path: "/center/myorder",
  //   component: MyOrder,
  //   name: "myorder",
  //   meta: { show: true },
  // },
  //重定向:项目跑起来的时候重定向到首页
  {
    path: "*",
    redirect: "/home",
  },
];
