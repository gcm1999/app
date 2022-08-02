<template>
  <div>
    <!-- <h1>首页</h1> -->
    <!-- 三级联动全局组件 -->
    <TypeNav></TypeNav>

    
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>
<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
// import { reqCategoryList } from '@/api/index.js';
// reqCategoryList().then(msg=>console.log(msg));
export default {
  name: "",
  data() {
    return {
      
    };
  },
  mounted() {
    this.$store.dispatch("getMockReqFloorList");
    this.$store.dispatch("getUserInfo");
  },
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
};
</script>
<style scoped></style>
