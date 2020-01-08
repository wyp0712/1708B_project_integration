const Mock = require("mockjs")
const template = Mock.mock({
  "data|10": [
    {
      "isChack": false,
      "id": "@id"
    }
  ]
})

const Arr = [
  {
    UserStr: "1",
    PwdStr: "1"
  }
]

Mock.mock("/api/LoginPage","post",(req,res) => {
  const {UserStr,PwdStr } = JSON.parse(JSON.parse(JSON.stringify(req.body)))
  return Arr.some(val => val.UserStr * 1 === UserStr * 1  && val.PwdStr * 1 === PwdStr * 1)
})

Mock.mock("/api/MockData",template)