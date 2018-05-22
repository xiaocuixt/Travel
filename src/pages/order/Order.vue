<!-- template中只能有一个标签，所以用div包起来 -->
<template>
  <div>
  order
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      lastCity: '',
      SwiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
