
const dataBook = require('./public/mock/bookList.json')
module.exports = {
  lintOnSave: false,
  devServer: {
    before(app) {
      // 注册接口
      // fs

      // 详情接口
      app.get('/api/deatil', (req, res) =>{
        const { id } = req.query;
        res.json({
          errCode: 0,
          list: dataBook.ranklist1.filter((val) => val.bookId == id)
        })
      })

      const UserData = [
        {
          username: 'devin',
          pwd: 123
        }
      ]

      // 登陆接口 
      app.get('/api/login', (req, res) => {
        const  { user, pwd } = req.query;
        const flag = UserData.some((item) => item.username === user && item.pwd == pwd)
        if (flag) {
          res.json({
            errCode: 0,
            msg: 'success',
            token: `bawei_${user}_${pwd}`
          })
        } else {
          res.json({
            errCode: -1,
            msg: 'fail',
          })
        }
      })

    }
  }
}