<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_200x200_8148509f.jpg',
          title: '上海欢乐谷',
          desc: '来这里寻找你所认识的上海'
        },
        {
          id: 2,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_200x200_f22705c9.jpg',
          title: '上海科技馆',
          desc: '技术改变生活，只有想不到没有做不到'
        },
        {
          id: 3,
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_200x200_9bf5cc14.jpg',
          title: '上海影视乐园',
          desc: '真实艺术地展现上海的历史风貌和人文景观'
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
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
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
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
