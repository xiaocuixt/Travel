<template>
  <div id="app">
    <keep-alive>    <!-- 缓存效果 -->
      <router-view/>  <!-- 显示当前路由地址显示的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
