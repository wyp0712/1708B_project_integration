<template>
  <div class="app-nav">
    <router-link to="/home/index">首页</router-link>  
    <router-link to="/about">about页面</router-link>  
    <router-link to="/login">登陆</router-link>  
    <router-link to="/home/bookRack">书架</router-link>  
  </div>
</template>

<script>
export default {

}
</script>
<style scoped lang='scss'>
.app-nav {
  width: 100%;
  height: 45px;
  display: flex;
  position: fixed;
  left:0;
  bottom:0;
  background: #eee;
  a {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    &.router-link-exact-active{
      color:red;
    }
  }
}
</style>