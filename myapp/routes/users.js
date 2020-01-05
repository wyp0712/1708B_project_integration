var express = require('express');
var router = express.Router();

const { loginFn,registerFn } = require('../controller/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res, next) => {

  const { user, pwd } = req.query;
  return loginFn(user, pwd).then(data => {
    console.log(data, 'data---------data')
    if (data.username) {
      res.send({
        errCode: 0,
        msg: '登陆成功',
        token: ''
      })
      return;
    }
    res.send({
      errCode: -1,
      msg: '请重新登陆',
    })
  })
  // res.status(200).json({
  //   msg: '这是测试数据',
  //   errCode: 0
  // })
})

router.post('/register', (req, res) => {
  const { username, password, realname } = req.body;
  registerFn(username,password, realname ).then(data => {
    console.log(data, 'success')
    res.send({
      errCode: 0,
      msg: '注册sussess',
      id: data.id
    })
  })
})
 
router.post('/post_test', (req, res, next) => {
  const data = req.body;
  res.status(200).send({
    msg: '这是post接口测试数据',
    errCode: 0,
    data: data
  })
})


module.exports = router;
