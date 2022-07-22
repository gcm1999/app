<template>
  <div>
    <Header></Header>
    根组件
    <Footer></Footer>
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
