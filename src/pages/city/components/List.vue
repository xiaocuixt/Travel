<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
        <div class="item border-bottom">
          阿拉尔
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'CityList'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
  .title
    line-height: .44rem
    background #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    padding: .1rem
    overflow: hidden
    .button-wrapper
      float: left
      width: 33.3%
      .button
        margin: .1rem
        text-align: center
        padding: .1rem 0;
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>