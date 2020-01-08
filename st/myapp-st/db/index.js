const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3051532wyp.',
  database : '1708B'
})



// 链接数据库
con.connect()

// con.query('select * from overtime limit 1, 10', (err, data) => {
//   console.log(data, 'data')
// })

console.log('数据库链接成功')
// 封装一个统一执行的sql函数
function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, data) => {
      if (err) {
        console.log(err, 'err----err')
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


