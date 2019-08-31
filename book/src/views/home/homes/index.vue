<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
        <img :src="item.img" alt />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "@/mock/index.js";

export default {
  data() {
    return {
      banner: []
    };
  },
  methods: {
    getBanner() {
      this.$http.get("/api/banner").then(res => {
        console.log(res.data.list);
        this.banner = res.data.list;
        this.$nextTick(() => {
          new Swiper(".swiper-container",{
            autoplay: true,
            loop:true
          });
        });
      });
    }
  },
  created() {
    this.getBanner();
  }
};
</script>

<style lang="scss" scoped>
.swiper-container,
.swiper-wrapper,
.swiper-slide,
img {
  width: 100%;
}
</style>