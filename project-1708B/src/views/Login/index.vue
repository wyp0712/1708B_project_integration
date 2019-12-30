<template>

  <div>
     
     账号：<input  v-model="user" /> <br>
     账号：<input  v-model="pwd" /> 
     <hr>


     <button @click="submitEvent">登陆</button>
      
  </div> 


</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    submitEvent() {
      console.log(this.$route.query, 'url参数')
      axios.get('/api/login', {
        params: {
          user: this.user,
          pwd: this.pwd
        }
      }).then(res => {
        console.log(res, 'res')
        if (res.data.errCode === 0) {
          localStorage.setItem('token',res.data.token)
          this.$router.push({
            path: this.$route.query.path || '/home/index'
          }).catch(e => {console.log(e)})
        } else {

        }
      })
    }
  },
}
</script>

<style>

</style>