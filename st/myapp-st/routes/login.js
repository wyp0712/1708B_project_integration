const express = require('express');
const router = express.Router()
const svgCaptcha = require('svg-captcha');

router.get('/get-img-verify', function (req, res) {
  console.log(req.query);
  var option = req.query;
  // 验证码，有两个属性，text是字符，data是svg代码
  var code = svgCaptcha.create();
  // {text: sw68}
  // { img: svg }
  // 保存到session,忽略大小写
  // req.session["randomcode"] = code.text.toLowerCase();
  // 返回数据直接放入页面元素展示即可
  res.send({
    img: code.data,
    text: code.text.toLowerCase()
  });
});

router.get('/svg_test', function (req, res) {
  var captcha = svgCaptcha.create();
  // console.log(captcha, 'captcha')
  // req.session.captcha = captcha.text;
  res.type('svg');
  req.cookies = captcha.text;
  res.status(200).send(captcha.data);
});




router.get('/test', (req, res) => {
  res.send('1212')
})

module.exports = router;