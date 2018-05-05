<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_600x330_3b0fdac5.jpg">
      <div class="banner-info">
        <div class="banner-title">海昌海洋世界4A级景区</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe643;</span>39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'

  export default {
    name: 'DetailBanner',
    components: {
      CommonGallary
    },
    data () {
      return {
        showGallary: false,
        imgs: [
          "http://img1.qunarzz.com/sight/p0/1612/ba/bacebf77937cdeaca3.img.jpg_r_800x800_460dc1fb.jpg",
          "http://img1.qunarzz.com/sight/p0/1612/c1/c14c2639b55cf054a3.img.jpg_r_800x800_aea4694a.jpg"
        ]
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallary = true
      },
      handleGallaryClose () {
        this.showGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        font-size: .24rem
        background rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
          margin-right: .1rem
</style>