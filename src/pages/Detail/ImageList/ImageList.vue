<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, index) in skuImageList">
        <img
          :src="img.imgUrl"
          :class="{ active: index == currentIndex }"
          @click="changeCurrentIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index;
      this.$bus.$emit("getCurrentIndex", index);
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: ["skuImageList"],
  watch: {
    skuImageList: {
      // // 监视mockBannerList属性发生变化，但不能保证dom已经遍历完毕
      handler(newValue, oldValue) {
        //
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            // direction: "vertical", // 垂直切换选项
            // loop: true, // 循环模式选项
            slidesPerView: 3,
            slidesPerGroup: 1,
            // 如果需要分页器
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            // scrollbar: {
            //   el: ".swiper-scrollbar",
            // },
          });
        });
      },
    },
  },
};
</script>

<style scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;
}

.swiper-container .swiper-slide {
  width: 56px;
  height: 56px;
}
.swiper-container .swiper-slide img {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 2px;
  width: 50px;
  height: 50px;
  display: block;
}

.swiper-container .swiper-slide img.active {
  border: 2px solid #f60;
  padding: 1px;
}

/* .swiper-container .swiper-slide img:hover {
  border: 2px solid #f60;
  padding: 1px;
} */

.swiper-button-next {
  left: auto;
  right: 0;
}

.swiper-button-prev {
  left: 0;
  right: auto;
}

.swiper-button-next,
.swiper-button-prev {
  box-sizing: border-box;
  width: 12px;
  height: 56px;
  background: rgb(235, 235, 235);
  border: 1px solid rgb(204, 204, 204);
  top: 0;
  margin-top: 0;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 12px;
}
</style>
