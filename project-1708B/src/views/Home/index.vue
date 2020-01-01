<template>
  <div class="home">

    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
import { getPageData } from '../../api/api'
export default {
  name: 'home',
  computed: {
    ...mapState([
      'list'
    ]),
    ...mapGetters([
      'getTotalCount'
    ])
  },
  created() {
       getPageData()
  //  console.log(this.$token, 'token')
  //  this.$http.get('http://39.105.187.138:3000/page?page=1&size=5').then(res => {
  //    console.log('home---page:', res, 'res')
  //  })
  },
  mounted() {
  },
  methods: {
    ...mapActions([
      'todoList',
    ]),
  },
  watch: {
  },
}
</script>
