const express = require('express');
const router = express.Router();
const { SuccessModel, FailModel  } = require('../model/index')
const { insertData, queryContent, updateList, deleteItem, detailItem } = require('../controller/blog')

/**
 * @param {id title createTime content author}
 * 
*/

router.get('/detail', async (req, res, next) => {
  console.log(req.query, 'query')
  const data = await detailItem(req.query.id)
  if (data) {
    res.send(new SuccessModel(data))
  } else {
    res.send(new FailModel())
  }
})

router.post('/insert', async (req, res, next) => {
  const contentData = {...req.body, id: Date.now(), author: Date.now(),  createTime: Date.now() }
  console.log(contentData, 'contentData')
  // 1. 读出内容 并且拼接用户插入的内容
  const data = await insertData(contentData)
  if (!data) {
    res.send(new SuccessModel('文章写入成功了'))
  } else {
    res.send(new FailModel(data))
  }
});

router.get('/blog_list', async (req, res, next) => {
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
  res.send(new SuccessModel(data))
});

router.get('/delete_item', async (req, res, next) => {
  const { id } = req.query;
  const deleteFlag = await deleteItem(id)
  if (!deleteFlag) {
    res.send(new SuccessModel('删除成功'))
  }
})




module.exports = router;
