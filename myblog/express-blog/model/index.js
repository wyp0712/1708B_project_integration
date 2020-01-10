
/**
 * @fn [BaseModel]
 * 
 * new SuccessModel(['item'])
 * 
 * { msg: 'success', errCode: 0, data: [] }
 * 
 * new FailModel('fali')
 * 
 * { msg: 'fail', errCode: 1 }
 * 
 * 
 */
class BaseModel {
  constructor(data, msg) {
    if (data) {
      this.data = data
    } 
    if (msg) {
      this.data = msg;
      this.msg = null;
    }
  } 
}

class SuccessModel extends BaseModel {
  constructor(props) {
    super(props)
    this.msg = 'success'
    this.errCode = 0
  }
}

class FailModel extends BaseModel {
  constructor(props) {
    super(props)
    this.msg = 'fail'
    this.errCode = 1
  }
}

module.exports = {
  SuccessModel,
  FailModel
}
