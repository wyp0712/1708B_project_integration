<template>
  <div>
    <div>overtime</div> 
      <HeaderBar :title="title" />
  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue'
export default {
  data() {
    return {
      title: '办公室休假申请表'
    }
  },
  components: {
    HeaderBar
  }
}
</script>

<style>

</style>