<template>
  <div>
    <van-nav-bar :title="title" >
      <van-icon 
        name="arrow-left" 
        slot="left" 
        @click="bindGo()"
      />
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
 
</template>

<script>
export default {
 props: {
   title: String
 },
 methods: {
   bindGo() {
     this.$router.go(-1);
   }
 },
}
</script>

<style>

</style>