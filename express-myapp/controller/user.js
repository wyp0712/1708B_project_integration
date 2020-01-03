
const { exec } = require('../db/index');

const searchFn = (username, realname) => {
  // 查询
  let sql = `select username, realname from users where 1+1` 
   if (username) {
     sql += ` and username like '%${username}%' `
   }
   if (realname) {
     sql += ` and realname=${realname}%'; `
   }
   sql += 'order by id desc;'
  return exec(sql).then(data => {
    console.log(data, 'data-我在控制器')
    return data || {}
  })
}


// 业务查询 函数
const getList = (username, password) => {
  const sql = `select * from users;`; 
  return exec(sql).then(data => {
    // console.log(data, 'data-我在控制器')
    return data || {}
  })
}

const getLogin = (username, password) => {
  const sql = `select username, realname from users where username='${username}' and password='${password}';`; 
  return exec(sql).then(data => {
    return data || {}
  })
}

const registerFn = (username, password, realname, time) => {
  const sql = `insert into users (username, password, realname, createtime) 
  values ('${username}','${password}','${realname}',${time});`
  console.log(sql, 'sql')
  return exec(sql).then(data => {
     console.log(data, 'data---控制器中')
     return data.insertId || {}
  })
}

const updateInfo = (username, password, realname, id) => {
  const sql = `update users set username='${username}', password='${password}', createtime=${Date.now()}, realname='${realname}' where id=${id};`
   console.log(sql, 'sql')
  return exec(sql).then(updateInfo => {
    console.log(updateInfo, 'updateInfo')
    return updateInfo.changedRows || {}
  }) 
}


module.exports = {
  getList,
  getLogin,
  registerFn,
  updateInfo,
  searchFn
}


