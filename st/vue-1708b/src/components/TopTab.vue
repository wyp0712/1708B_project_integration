<template>
  <div class="tab-box">
    <ul v-for="(item, index) in list" :key="index"
     @click="bindTabTop(index)"
     :class="{active: index === tabIndex}"
    >
      <li> <van-icon :name="item.icon" size="40" /> </li>
      <li>{{item.name}}</li>
    </ul>
  </div> 
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      list: [
        {
          icon: 'chat-o',
          name: '待处理'
        },
        {
          icon: 'chat-o',
          name: '已发起'
        },
        {
          icon: 'chat-o',
          name: '已处理'
        }
      ],
      tabIndex: 0
    }
  },
  computed: {
    ...mapGetters([
      'getTotal'
    ])
  },
  methods: {
    ...mapActions('tab',[
      'updateTopTabIndex'
    ]),
    bindTabTop(index) {
      this.tabIndex = index;
      this.updateTopTabIndex(index)
    }
  }
}
</script>
<style lang='scss' scoped>
.tab-box {
  width: 100%;
  display: flex;
  ul {
    flex:1;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 35px;
      margin: 10px;
    }
  }
  .active {
    color: red;
  }
}
</style>