<!-- template中只能有一个标签，所以用div包起来 -->
<template>
  <home-header></home-header>
</template>

<script type="text/javascript">
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
