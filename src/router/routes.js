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

// 实现路由懒加载
// const foo = () => {
//   console.log("search");
//   return import("@/pages/Search");
// };
//配置路由
export default [
  {
    path: "/home",
    component: () => import("@/pages/Home"),
    name: "home",
    //   配置路由元信息
    meta: { show: true },
  },
  {
    path: "/search/:keyword?",
    component: () => import("@/pages/Search"),
    meta: { show: true },
    name: "search",
  },
  {
    path: "/login",
    component: () => import("@/pages/Login"),
    meta: { show: false },
  },
  {
    path: "/register",
    component: () => import("@/pages/Register"),
    meta: { show: false },
  },
  {
    path: "/detail/:skuid",
    component: () => import("@/pages/Detail"),
    meta: { show: true },
  },
  {
    path: "/cart",
    component: () => import("@/pages/Cart"),
    meta: { show: true },
  },
  {
    path: "/addCartSucess",
    component: () => import("@/pages/AddCartSucess"),
    name: "addCartSucess",
    meta: { show: true },
  },
  {
    path: "/trade",
    component: () => import("@/pages/Trade"),
    name: "trade",
    meta: { show: true },
  },
  {
    path: "/pay",
    component: () => import("@/pages/Pay"),
    name: "pay",
    meta: { show: true },
  },
  {
    path: "/paysuccess",
    component: () => import("@/pages/PaySuccess"),
    name: "paysuccess",
    meta: { show: true },
  },
  {
    path: "/center",
    component: () => import("@/pages/Center"),
    name: "center",
    meta: { show: true },
    // 二级路由组件
    children: [
      {
        path: "/center/myorder",
        component: () => import("@/pages/Center/MyOrder"),
      },
      {
        path: "/center/grouporder",
        component: () => import("@/pages/Center/GroupOrder"),
      },
      // 重定向
      {
        path: "/center",
        redirect: "/center/myorder",
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
