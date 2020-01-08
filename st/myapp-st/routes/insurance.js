var express = require('express');
var router = express.Router();
const {
   selectInsurance,
   insertInsurance
} = require('../controller/insurance');

/* GET home page. */
router.get('/insurance', async function(req, res, next) {
  const data = await selectInsurance()
  if (data) {
    res.send({
      code: 1,
      msg: 'succsss',
      data
    })
  } else {
    res.send({
      code: 0,
      msg: 'fail',
    })
  }
});

router.post('/insert', async function(req, res, next) {
  const data = await insertInsurance({...req.body})

  if (data) {
    res.send({
      code: 1,
      msg: 'succsss',
    })
  } else {
    res.send({
      code: 0,
      msg: 'fail',
    })
  }
});

module.exports = router;