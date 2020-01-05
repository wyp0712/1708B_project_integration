<template>
  <div>
    <h1
      v-for="(item,index) in list" 
      :key="index"
      @click="tabEvent(index)"
    ></h1>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '20%' }"
      @click="close"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      list: ['tab1','tab2']
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
    ...mapMutations([
      'showEvent'
    ]),
    close() {
      this.showEvent(false)
    }
  },
}
</script>

<style>

</style>