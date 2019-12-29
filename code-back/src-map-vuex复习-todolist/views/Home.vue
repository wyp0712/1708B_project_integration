<template>
  <div class="home">
    <input type="text" v-model="inputVal"> <button @click="bindTodoList">确定</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{item}}
      </li>
    </ul>
     {{getTotalCount}}
     {{flag}}
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      inputVal: '',
      flag: true
    }
  },
  computed: {
    ...mapState({
      list: state => state.list
    }),
    ...mapGetters([
      'getTotalCount'
      ])
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions([
      'todoList'
    ]),
    bindTodoList() {
      // this.$store.commit('todoList', this.inputVal)
      // diapacth 只能提交给action
      // this.$store.dispatch('todoList')
      this.todoList() // dispatch提交代码
      this.inputVal = ''
    }
  },
  watch: {
  },
  components: {
    HelloWorld
  }
}
</script>
