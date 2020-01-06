var express = require('express');
var router = express.Router();

const { 
  getList, 
  getLogin, registerFn, updateInfo, searchFn, 
       submitFormData } = require('../controller/user')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/post_submit', (req, res, next) => {
  const options = req.body;
  console.log(options, 'options')
  return submitFormData({...options}).then(data => {
    res.send({
      errCode: 0,
      msg: 'success',
      data
    })
  })
})

// 上传图片接口
router.post('/upload_img', (req, res, next) => {
    
  // buffer  数据流;
  // 当图片上传成功之后，将保存成功的图片的路径返回给前端；
  res.send({
    errCode: 0,
    msg: 'success',
    imgurl: 'https://p0.meituan.net/128.180/movie/c6d7c3d84d54abc910f85468db9985362428931.jpg'
  })


})


router.get('/search', (req, res) => {
  const { username, realname } = req.query;
  console.log(username, realname, 'rea-----------后端接收参数') 
  return searchFn(username,realname).then(searchData => {
    console.log(searchData, 'data')
    res.send({
      errCode: 0,
      msg: 'success',
      data: searchData
    })
  })

})

router.post('/login',(req, res) => {
  const { user, pwd } = req.body;
  return getLogin(user,pwd).then(data => {
    res.send({
      errCode: 0,
      msg: 'success',
      data: data
    })
  })
})

router.post('/register',(req, res) => {
  const { user, pwd, name, time } = req.body;
  return registerFn(user, pwd, name, time).then(data => {
    res.send({
      errCode: 0,
      msg: 'success',
      insertId: data
    })
  })
})

router.post('/updateinfo',(req, res) => {
  const { user, pwd, realname, id } = req.body;
  return updateInfo(user, pwd, realname, id).then(data => {
    res.send({
      errCode: 0,
      msg: 'success',
      update: data
    })
  })
})


router.get('/get-test',(req, res) => {
  const { user, name } = req.query;
  res.status(200).send({
    errCode: 0,
    msg: 'success',
  })
})

router.post('/post-test', (req, res) => {

})

module.exports = router;
