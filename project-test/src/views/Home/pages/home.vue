<template>
  <div>
    <ul>
      <li v-for="(item) in bookData.ranklist0" :key="item.bookId">
        <img @click="detailEvent(item)" :src="imgUrl + item.coverUrl" alt="">
        {{item.bookName}}
        {{item.subCateName}}
        {{item.description}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      msg: true,
      imgUrl: 'https://static.zongheng.com/upload/s_image'
    }
  },
 created() {
   this.getBookData()
 }, 
 computed: {
   ...mapState([
     'bookData'
   ])
 },
 methods: {
  ...mapActions([
    'initBookData'
  ]),
  // 跳转详情页面
  detailEvent(item) {
    // 第一种： 动态路由携带id直接跳过去
    // 第二种：普通路由通过name跳转路由，通过query携带参数过去

    // this.$router.push({
    //   path: `/detail/${item.bookId}`
    // })
    this.$router.push({
      name: 'detail',
      query: {
        id: item.bookId
      }
    })
  },
  getBookData() {
    axios.get('/mock/bookList.json').then(res => {
      // console.log(res, 'home-----data')
      this.initBookData(res.data)
    })
  },
 }

}
</script>

<style>

</style>