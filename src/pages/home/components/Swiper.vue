<template>
  <!-- 使用wrapper解决当网速比较慢时，图片加载不出来时轮播的默认高度 -->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swipperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swipperList: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_640x200_4c7220d4.jpg'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_640x200_0d7b87b6.jpg'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/8c/9a3ebf07a1570702.jpg_640x200_53893abc.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25% //相对于宽度的比例
    background: #eee
    .swiper-img
      width: 100%
</style>
