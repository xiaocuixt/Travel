<template>
  <div id="app">
    <keep-alive exclude="Detail">    <!-- 缓存效果, 用exclude可以将某个组件排除在外 -->
      <router-view/>  <!-- 显示当前路由地址显示的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
