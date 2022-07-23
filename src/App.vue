<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    根组件

    <!-- 根据组件身上的$route获取当前路由的信息，通过路由路径判断Footer显示隐藏 -->
    <!-- <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>
<script>
//引入
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "",
  components: {
    Header,
    Footer,
  },
};
</script>
<style scoped></style>
