/**
 * @fn { 后期换成数据库 }
 * @fn { 暂时采用fs方案 去修改数据 }
 * 
 * @fn { fs.readFile  fs.writeFile }
 * 
 */
const fs = require('fs');
const path = require('path');

function execReadFile(url) {
  return new Promise((resolve, reject) => {
     fs.readFile(path.join(__dirname, url), (err, data) => {
       if (err) {
        reject(err)
        return;
       }
       resolve(JSON.parse(data.toString()))
     })
  })
} 

function execWriteFile(url, data) {
  return new Promise((resolve, reject) => {
     fs.writeFile(path.join(__dirname, url), JSON.stringify(data), (err, data) => {
       if (err) {
        reject(err)
        return;
       }
       resolve(data)
     })
  })
}

module.exports = {
  execReadFile,
  execWriteFile
}
