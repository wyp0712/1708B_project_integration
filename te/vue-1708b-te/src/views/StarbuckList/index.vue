<template>
  <div>
    <HeaderBar :title="title"></HeaderBar>
    <TopTab></TopTab>
    <NavBar></NavBar>


    <div class="task" @click="bindPopUp">
      发起任务
    </div>

    <van-popup
      v-model="showPop"
      position="bottom"
      :style="{ height: '20%' }"
    >
      <div class="pop-box">
        <ul v-for="(item, index) in list" :key="index"
         @click="bindRouter(index)"
        >
          <li> <van-icon :name="item.icon" size="40" /> </li>
          <li>{{item.name}}</li>
        </ul>
      </div>

    </van-popup>

    <ul>
      <li v-for="(item, index) in starBuckList" :key="index">
        {{ item.nickname }}
        {{item.applicationNumber}}
      </li>
    </ul>

  </div>
  
</template>

<script>
import { mapActions,mapState } from 'vuex'
import { getUserList } from '@/api/api'
export default {
  components: {
    HeaderBar: () => import('@/components/Header.vue'),
    TopTab: () => import('@/components/TopTab.vue'),
    NavBar: () => import('@/components/NavBar.vue'),
  },
  data() {
    return {
      title: '加班/休假',
      list: [
        {
          icon: 'chat-o',
          name: '加班'
        },
        {
          icon: 'chat-o',
          name: '休假'
        }
      ],
      obj: {
        status: 0,
        type: 'overtime',
        create_at: 0,
        pageSize: 10,
        page: 1
      },
      starBuckList: [],
      status: 0
    }
  },
  computed: {
    ...mapState('tab',[
      'showPop',
      'topTabIndex',
      'bottomTabIndex'
    ]),
    showPop: {
      get() {
        return this.$store.state.tab.showPop
      },
      set(val) {
        this.$store.state.tab.showPop = val;
      }
    }
  },
  watch: {
    topTabIndex(v) {
      // console.log(v, 'v')
      // 事件的状态处理
      this.obj.status = v;
      this.status = v;
      // 参数类型处理
      this.obj.type = 'overtime'
      // this.getAjaxList()
    },
    bottomTabIndex(v) {
      // console.log(v, '我是bottomindex')
      // 获取到topindex的类型
      console.log(this.status, 'status')
      this.obj.status = this.status;
      this.obj.type = v === 0 ? 'overtime' : 'vacation'
      // 获取到当前下标
      console.log({...this.obj}, 'obj----参数')
      // this.getAjaxList()
    }
  },
  created() {
    // this.getAjaxList()
  },
  methods: {
    getAjaxList() {
      getUserList({...this.obj}).then(res => {
        this.starBuckList = res.data;
      })
    },
    ...mapActions('tab',[
      'updateShowPopStatus'
    ]),
    bindRouter(index) {
      if(index === 0) {
        this.$router.push({
          path: '/commit/overtime'
        }) 
      } else {
        this.$router.push({
          path: '/commit/vacation'
        }) 
      }
    },
    bindPopUp() {
      this.updateShowPopStatus(true)
    }
  },
}
</script>

<style lang='scss' scoped>
.pop-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
  .task {
    width: 100px;
    height: 35px;
    border-radius: 30px;
    border:1px solid black;
    text-align: center;
    line-height: 35px;
    position: fixed;
    right:5%;
    bottom:5%;
  }
</style>