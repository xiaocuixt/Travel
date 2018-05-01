<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'WeekendRecommend',
  data () {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海必游TOP10',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg',
          title: '学生最爱TOP10',
          desc: '学习之余最爱玩耍，爱玩的你不可错过'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
          title: '上海城市观光',
          desc: '来这里寻找你所认识的上海'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'

  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    min-with: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
