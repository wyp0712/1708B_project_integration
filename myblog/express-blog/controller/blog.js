const {execReadFile, execWriteFile} = require('../db/index')

const insertData = async (data) => {
  const dataRead = await execReadFile('../mock/content.json')
  let contentData = dataRead.find(val => val.id === data.id)
  if (!contentData) {
    dataRead.push(data)
    // 2. push 写入内容
    const resWrite = await execWriteFile('../mock/content.json', dataRead)
    return resWrite;
  } else {
    return '存在即合理'
  }
}

// 列表查询
const queryContent = async () => {
  const dataRead = await execReadFile('../mock/content.json')
  return dataRead
}

// 更改数据
const updateList = async (res) => {
  const dataRead = await execReadFile('../mock/content.json')
  let goods = dataRead.find(val => val.id == res.id)
  if (goods) {
    goods = {...res, title:res.title, content:res.content, creatTime: Date.now()}
    const dataRead = await execReadFile('../mock/content.json')
    let updateIndex = dataRead.findIndex(val => val.id == res.id)
    dataRead[updateIndex] = goods;
    const flag = await execWriteFile('../mock/content.json', dataRead)
    if (!flag) {
      return goods.id
    }
  }
}

const deleteItem = async (id) => {
  const dataRead = await execReadFile('../mock/content.json')
  const data = dataRead.filter((val => val.id != id));
  const flag = await execWriteFile('../mock/content.json', data)
  return flag;
}

module.exports = {
  insertData,
  queryContent,
  updateList,
  deleteItem
}