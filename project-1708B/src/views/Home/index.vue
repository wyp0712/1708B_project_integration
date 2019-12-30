<template>
  <div class="home">

    <router-view></router-view>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'

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
