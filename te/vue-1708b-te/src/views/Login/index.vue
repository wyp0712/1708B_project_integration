<template>

 <div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button type="primary">主要按钮</van-button>
 </div>

 
</template>

<script>
import { testPostList } from '@/api/api.js';
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  components: {
  },
  created() {

    // testPostList({
    //   user:'devin'
    // }).then(res => {
    //   console.log(res, 'res')
    // })

  },
}
</script>

<style>

</style>