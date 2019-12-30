<template>
  <div id="app">
    <router-view/>

    <NavBar />
  </div>
</template>

<script>
import NavBar from '@/components/navBar.vue'
export default {
  components: {
    NavBar
  }
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
