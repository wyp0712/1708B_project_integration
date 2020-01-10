
const {execReadFile, execWriteFile} = require('../db/index')

const loginFn = () => {
  return execReadFile('../mock/users.json').then(data => {
    return data || {}
  })
}

const registerFn = (params) => {
  return execWriteFile('../mock/users.json', params).then(data => {
    return data
  })
}

module.exports = {
  loginFn,
  registerFn
}