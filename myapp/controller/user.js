const { exec } = require('../db/mysql')

const loginFn = (username, password) => {
  console.log(username, password, 'password-------controolser')
  const sql = `
   select username, realname from users where username="${username}" and password="${password}"
  `
  return exec(sql).then(rows => {
    console.log(rows, 'rows')
    return rows[0] || {}
  })
}

const registerFn = (username, password, realname) => {
  const sql = `
  insert into users (username, password, realname) values('${username}','${password}', '${realname}')
  `
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}


const getList = (id, username) => {
  let sql = `
   select * from users where 1+1 `
   if (id) {
    sql += `and id=${id} `
   } 
   if (username) {
    sql+= `and username like '%${username}%' `
   }
   sql += `order by id desc;`
   return exec(sql).then(result => {
    return {
      result
    }
  })
}


module.exports = {
  loginFn,
  registerFn,
  getList
}