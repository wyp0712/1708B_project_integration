<template>
  <div id="app">
    <router-view/>
    <NavBar />
  </div>
</template>
<script>
import axios from 'axios'
import NavBar from '@/components/navBar.vue'
import { getPageData, getPostTest } from '@/api/api.js'
export default {
  name: 'app',
  components: {
    NavBar
  },
  created() {
    console.log(getPostTest, 'getPostTest')
     getPostTest({
       user: 'devin',
       name: 'hello world'
     })

    // getPageData({
    //   page:1,
    //   size:5
    // })
    // axios.get('/api/page?page=1&size=5').then(res => {
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
