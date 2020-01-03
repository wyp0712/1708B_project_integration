<template>
  <div class="about">
    <h1>This is an about page</h1>
   <div class="box">
    <span v-for="(item, index) in list" 
     :class="{'active': tab1Index === index}"
     @click="bindTabItem(index)"
    :key='index'>
      {{item}}
    </span>
    
   </div>
   <div class="box-list">
    <span v-for="(item, index) in tabList" 
     @click="bindTabSubItem(index)"
     :class="{'active': tab2Index === index}"
    :key='index'>
      {{item}}
    </span>
   </div>

   <ul>
     <!-- {{dataList}} -->
     <li v-for="(item, index) in dataList" :key="index">
       {{item.nickname}}
       {{item.applicationNumber}}
     </li>
   </ul>
  </div>
</template>
<script>
import { getTabData } from '@/api/api.js'
import axios from 'axios'
import moment from 'moment'
export default {
  data() {
    return {
      list: ['待处理','已发起','已处理'],
      tabList: ['加班','休假'],
      dataList: [],
      obj: {
        status: 0,
        type: 'overtime',
        create_at: 0,
        pageSize: 10,
        page: 1
      },
      tab1Index: 0,
      tab2Index: 0,
    }
  },
  created() {
  },
  mounted() {
    this.getData()
  },
  methods: {
    // 请求数据，统一参数
    getData() {
      axios.get('http://127.0.0.1:3000/api/task/list', {
        params: {...this.obj}
      }).then(res => {
        console.log(res, 'res')
        this.dataList = res.data.data;
      })
      // getTabData({
      //   url: '/api/task/list',
      //   method: 'get',
      //   params: { ...this.obj }
      // }).then(res => {
      //   console.log(res, 'res')
      // })
      // getTab1({
      //   url: '/api/task/list',
      //   methods: 'get',
      //   params: {...this.obj}
      // }).then(res => {
      //   this.dataList = res.data;
      // })
    },

    // 上面的tab
    bindTabItem(index) {
      // tab切换下标
      this.tab1Index = index;

      this.tab2Index = 0;
      this.obj.type = 'overtime'
      this.obj.status = index;

      this.getData()
    },

    // 下面
    bindTabSubItem(index) {
       this.tab2Index = index;

       this.obj.type = this.tab2Index === 0 ? 'overtime' : 'vacation'
       this.obj.status = this.obj.status;

       this.getData()
    }
  },
}
</script>
<style lang="scss">

  .box, .box-list {
    width: 100%;
    display: flex;
    span {
      flex:1;
      line-height: 35px;
      background: #eee;
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active {
        background: red;
        color: #fff;
      }
  }
</style>
