<template>
  <div id="app">
      <router-view/>
      <NavBar />
       <!-- <van-popup v-model="show">正在加载页面</van-popup> -->
<van-calendar v-model="show" :show-confirm="false" />
  </div>
</template>
<script>
/*
 v-model 双向数据绑定
    get
    set
  计算属性中,默认只有获取   
*/
import axios from 'axios'
import NavBar from '@/components/navBar.vue'
import { mapState,mapActions } from 'vuex'
import { getTestData, getPostTest } from '@/api/api.js'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'show'
    ]),
    show: {
      get() {
        return this.$store.state.show
      },
      set(val) {
        this.$store.state.show = val;
      }
    }
  },
  methods: {
    onConfirm() {

    }

  },
  components: {
    NavBar
  },
  created() {
    // 测试接口
    // getTestData({
    //   page: 1,
    //   size: 5
    // }).then(res => {
    //   console.log(res, 'res')
    // })
  },
}
</script>

<style lang="scss">
@import url('./assets/css/normal.css');
@import url('./assets/iconfont/iconfont.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
