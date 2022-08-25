<template>
  <div id="Sass">
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      style="height: 200px; width: 400px; background: yellow"
    >
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <el-divider></el-divider>
    <el-carousel height="150px" :autoplay="false">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Sass",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<!-- <style scoped lang="scss">
$color: skyblue;
#Sass {
  height: 400px;
  background: $color;
  border: 2px solid sandybrown;
}
// 使用scss穿透
#Sass /deep/ {
  .swiper-pagination-bullets {
    background: sandybrown;
  }
  .swiper-pagination-bullet-active {
    background: red;
  }
  .is-active {
    .el-carousel__button {
      background: red;
    }
  }
}
</style> -->

<style scoped lang="stylus">
#Sass {
  height: 400px;
  background: skyblue;
  border: 2px solid sandybrown;
}

#Sass >>> .swiper-pagination-bullets {
    background: sandybrown;
  }
 #Sass >>> .swiper-pagination-bullet-active {
    background: red;
  }
#Sass /deep/ .el-carousel__button {
      background: red;
    }
</style>
