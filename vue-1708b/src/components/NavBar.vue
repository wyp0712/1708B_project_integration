<template>
  <div class="nav-box">
    <div class="box">
      <span v-for="(item, index) in list" :key="index"
       @click="bindTabNav(index)"
       :class="{active: index === tabIndex}"
      >
        {{item}}
      </span>{{topTabIndex}}
    </div>
  </div>  
</template>

<script>
import { mapState, mapActions,mapMutations } from 'vuex'
export default {
  data() {
    return {
      list: ['加班','休假'],
      tabIndex: 0
    }
  },
  computed: {
    ...mapState([
      'topTabIndex'
    ])
  },
  watch: {
    topTabIndex(v) {
      this.tabIndex = 0;
      this.updateBottomTabIndex(this.tabIndex)
    }
  },
  methods: {
    ...mapMutations([
      'bottomTabEvent'
    ]),
    ...mapActions([
      'updateBottomTabIndex'
    ]),
    bindTabNav(index) {
      this.tabIndex = index
      // updateBottomTabIndex
      this.updateBottomTabIndex(index)
    }
  },
}
</script>
<style lang='scss' scoped>
.nav-box {
  width: 100%;
    display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  .box {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    .active{
      background: #ccc;
    }
    span {
     width: 100px;
     height: 35px;
     line-height: 35px;
     text-align: center;
     border:1px solid black;
      &:nth-child(1) {
         border-top-left-radius: 30px;
         border-bottom-left-radius: 30px; 
         border-right: none;
      }
      &:nth-child(2) {
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px; 
      }
    }
  }
}
</style>