<template>
  <div class="order-content">
    <div class="consult-icon">
      <div class="iconfont order-consult">&#xe63e;</div>
      <div class="order-consult-text">咨询</div>
    </div>
    <div class="order-link">立即预定</div>
  </div>
</template>
<script>
export default {
  name: 'DetailOrder'
}
</script>

<style lang="stylus" scoped>
  .order-content
    position: fixed
    bottom: 0
    left: 0
    right: 0
    line-height: .98rem
    height: .98rem
    .consult-icon
      float: left
      padding: .16rem 0 .06rem
      width: 1.02rem
      background: #fff
      color: #616161
      text-align: center
      height: .98rem
      border-top: solid 1px #eee
      .order-consult
        position: relative;
        top: -.02rem;
        height: .4rem;
        font-size: .4rem;
        line-height: .4rem;
      .order-consult-text
        height: .28rem
        font-size: .2rem
        line-height: .28rem
    .order-link
      overflow: hidden
      height: .98rem
      background: #ff9800
      color: #fff
      font-size: .4rem
      text-align: center
</style>
