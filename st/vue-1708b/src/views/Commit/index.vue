<template>
  <div>
   <HeaderBar :title="$route.params.type === 'overtime' ? '加班' : '休假' " />
   <!-- 1. 何时开始加班 2. 加班开始时间，3. 加班结束时间, 4, 加班描述, 5. 图片提交 -->
   <div class="create_at">
     创建事件： <el-date-picker
            v-model="options.value"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
   </div>
   <div class="start_time">
     开始时间：<el-time-select
              v-model="options.value1"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
              }"
              placeholder="选择时间">
            </el-time-select>
   </div>
   <div class="end_time">
     结束时间：<el-time-select
            v-model="options.value2"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }"
            placeholder="选择时间">
          </el-time-select>
   </div>

   <div class="upload_img">
    图片上传： <van-uploader :after-read="afterRead" v-model="fileList" multiple />
   </div>

   <div class="btn_box">
     <van-button size="large" type="default">取消</van-button>
     <van-button size="large" type="info"
      @click="submitEvent"
     >提交</van-button>
   </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue'
import { postFormData, uploadImg } from '@/api/api.js'
import { Toast } from 'vant'
export default {
  data() {
    return {
      title: '办公室加班申请表',

      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ],
      options: {
        value: '',
        value1: '',
        value2: '',
      },
      imgs: []
    }
  },
  components: {
    HeaderBar
  },
  methods: {
    submitEvent() {
      let data = {
        create_at: this.options.value,
        startTime: this.options.value1,
        endTime: this.options.value2,
        imgs: this.imgs,
        list_type: this.$route.params.type,
        status: 0,
        type: 2
      }
      console.log(data, '参数')
      // overtime
      postFormData({...data}).then(res => {
        // console.log(res, 'res----data') 
        Toast(res.msg)
        // if ()
        this.$router.back()
      })
    },
    afterRead(file) { // 
      // 
      uploadImg(file).then(res => {
        console.log(res, 'res')
        this.imgs.push(res.imgurl)
      })
      // this.imgs.push(url)
    }
  },
}
</script>

<style lang='scss' scoped>
.create_at {
  padding: 20px;
}
.start_time {
  padding: 20px;
}
.end_time {
  padding: 20px;
}
.upload_img {
  padding: 20px;
}
.btn_box {
  display: flex;
  button {
    flex:1;
  }
}
</style>