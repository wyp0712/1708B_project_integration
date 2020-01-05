<template>
  <div>
      <HeaderBar :title="type==='overtime' ? '办公室加班申请表' : '办公室休假申请表' " />
      <div class="type-box">
        类型：{{overtime}}
      </div>
      <div class="select-time">
        选择日期: <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="time-box">
       起始时间:  
        <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30'
            }">
          </el-time-select>
      </div>
      <div class="time-box">
       结束时间:
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
          }">
        </el-time-select>
      </div>
      <div class="file-upload">
        上传附件：<van-uploader :after-read="afterRead" v-model="fileList" multiple />
      </div>

      <div class="btn-box">
        <van-button size="large" type="default">取消</van-button>
        <van-button size="large" type="info">提交</van-button>
      </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/Header.vue'
export default {
  data() {
    return {
      title: '',
      value1: '',
      // minDate: new Date(2020, 0, 1),
      // maxDate: new Date(2025, 10, 1),
      // currentDate: new Date(),
      startTime: '',
      endTime: '',
      overtime: '加班',
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true }
      ]
    }
  },
  created() {
    console.log(this.$route.params.type)
    this.type = this.$route.params.type;
  },
  components: {
    HeaderBar
  },
  methods: {
    afterRead(file) {
      console.log(file, 'flile')

    }
  },
}
</script>

<style lang='scss' scoped>
.select-time {
    padding: 20px;
    .el-date-editor {
      width: 220px;
    }
}
.time-box {
  padding: 20px;
}
.type-box {
    padding: 20px;
}
.file-upload {
      padding: 20px;
}
.btn-box{
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    // margin-left:25px; 
  }
}
</style>