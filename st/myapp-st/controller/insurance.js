const { exec } = require('../db/index');
const node_uid = require('node-uid')

// 保险单的查询
const selectInsurance = () => {
  const sql = `select * from insurance`;
  return exec(sql).then(data => {
    return data || {}
  })
}

// 插入数据 
const insertInsurance = ({ 
  order_time,
  username,
  phone,
  pro_type,
  loan_amount,
  loan_rate,
  order_status
}) => {
  const sql = `insert into insurance (order_id, order_time, username, phone, pro_type, loan_amount, loan_rate, order_status) 
  values ('${node_uid(15)}', '${order_time}', '${username}','${phone}','${pro_type}', '${loan_amount}',  '${loan_rate}', ${order_status});`
  console.log(sql, 'sql-----sql')
  return exec(sql).then(data => {
    return data.insertId || {}
 })
}



module.exports = {
  selectInsurance,
  insertInsurance
}