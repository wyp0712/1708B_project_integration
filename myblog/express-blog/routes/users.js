var express = require('express');
var router = express.Router();
const { loginFn,registerFn } = require('../controller/users')
const { execReadFile, execWriteFile} = require('../db/index')
const { SuccessModel, FailModel  } = require('../model/index')

/**
 * @param { 登陆 注册 }
 */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async (req,res, next) => {
  // 前端参数
  const { username, password } = req.body;
  // 读取数据库结果
  const data = await loginFn();
  // 读取到数据库数据之后，匹配数据
  let loginFlag = data.some(val => val.username == username && val.password == password)
  if (loginFlag) {
    res.send(new SuccessModel())
  } else {
    res.send(new FailModel())
  }
})

router.post('/register', async (req,res, next) => {
  // 前端参数
  const { username } = req.body;
  // 拿到数据库数据，跟当前的账号密码进行匹配，如果有，就不注册 
  const data = await execReadFile('../mock/users.json');
  const loginFlag = data.some(val => val.username == username)
  if (!loginFlag) {
    // 当前注册密码可以注册
   data.push(req.body)
   const results = await execWriteFile('../mock/users.json', data)
   console.log(results, 'results')
   if (!results) {
     res.send(new SuccessModel('注册成功'))
   }
  } else {
    res.send(new FailModel('已经注册了'))
  }
})

module.exports = router;
