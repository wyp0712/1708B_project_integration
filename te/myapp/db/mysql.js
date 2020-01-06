
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3051532wyp.',
  port: '3306',
  database: 'myblog'
})

con.connect()

// con.query('insert into users () values()', (err, data) => {
//   console.log(data, 'data')
// })

// 封装一个统一执行的sql函数
function exec(sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err, 'err')
        reject(err)

        return;
      }
      resolve(result)
    })
  })
}


module.exports = {
  exec
}
