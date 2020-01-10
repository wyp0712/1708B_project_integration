const express = require('express');
const router = express.Router();
const { SuccessModel, FailModel  } = require('../model/index')
const { insertData,queryContent, updateList } = require('../controller/blog')

/**
 * @param {id title createTime content author}
 * 
 */

router.post('/insert', async (req, res, next) => {
  const contentData = {...req.body, id: Date.now(),  createTime: Date.now() }
  console.log(contentData, 'contentData')
  // 1. 读出内容 并且拼接用户插入的内容
  const data = await insertData(contentData)
  if (!data) {
    res.send(new SuccessModel('文章写入成功了'))
  } else {
    res.send(new FailModel(data))
  }
});

router.get('/query', async (req, res, next) => {
  const data = await queryContent()
  if (data) {
    res.send(new SuccessModel(data))
  } else {
    res.send(new FailModel())
  }
})

router.post('/update_list', async (req, res, next) => {
  // 1. 读出内容 并且拼接用户插入的内容
  const data = await updateList(req.body)
  console.log(data, 'data')
  // if (data) {
    res.send(new SuccessModel(data))
  // }
});




module.exports = router;
