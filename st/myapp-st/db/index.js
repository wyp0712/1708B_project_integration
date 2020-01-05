const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3051532wyp.',
  database : '1708Btest'
})

// 链接数据库
con.connect()
// 封装一个统一执行的sql函数
function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, data) => {
      if (err) {
        reject(err)
        return;
      }
      resolve(data)
    })
  })
}

module.exports = {
  exec
}


