<template>

  <div>
     
     手机号：<input  v-model="phone" /> <br>
     密码： <input  v-model="pwd" /> 
     <hr>


     <button @click="submitEvent">登陆</button>
      
  </div> 


</template>

<script>
import axios from 'axios';
import { getLoginMsg } from '@/api/api.js';
export default {
  data() {
    return {
      phone: '',
      pwd: ''
    }
  },
  methods: {
    submitEvent() {
      // 登陆接口请求
      getLoginMsg({
        phone: this.phone,
        password: this.pwd
      }).then(res => {
        console.log(res, 'res')
        localStorage.setItem('token', res.token)
        this.$router.push({
          path: '/home/index'
        })
      })
    }
  },
}
</script>

<style>

</style>