import React, { Component } from 'react'//Todo 登录页面
import { connect} from "react-redux"
import axios from "axios"
import "../mock/mock.js.js"


class LoginPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      CountDown: 10,//Todo 倒计时
      isChack: true,//Todo 验证码布尔值
      AuthCode: '012345789',//Todo 验证码
      AuthCodeChack: true,//Todo 控制验证码按钮布尔
      UserStr: "",//Todo 账号val
      PwdStr: "",//Todo 密码val
      VerifyStr: "",//Todo 验证码val
    }
  }
  render(){
    const { CountDown,isChack,UserStr,PwdStr,VerifyStr} = this.state
    const { ArrStr,ShowChack} = this.props
    this.ShadeEvent(CountDown)
    return (
      <div className="LoginPage-box">
        <div className="LoginPage">
          <div className="head-portrait"></div>
          <p><input type="text" placeholder="请输入账号" value={UserStr} onChange={(e) => this.UserStrChange(e)}/></p>
          <p><input type="password" placeholder="请输入密码" value={PwdStr} onChange={(e) => this.PwdStrChange(e)}/></p>
          <p>
            <input type="text" placeholder="请输入验证码" value={VerifyStr} onChange={ (e) => this.VerifyStrChange(e)}/>
            <button onClick={ () => this.VerificationCodeEvent()}>
              { isChack ? "获取验证码" : CountDown + "s重新获取"}
            </button>  
          </p>
          <p><button onClick={() => this.BtnEnterEvent()}>登录</button></p>
        </div>

        {
          ShowChack && <div className="ShowChack" >
            验证码：<h1 onClick={ (e) => this.VerifyStrClick(e)}>{ArrStr}</h1>
          </div>
        }
      </div>
    )
  }

  BtnEnterEvent = () => {
    console.log(this.state, 'state')
    //Todo    账号   密码    验证码  / 本页面储存的数据
    const { UserStr,PwdStr,VerifyStr} = this.state
    //Todo react-redux中储存的验证码
    const { ArrStr } = this.props
    axios.post("/api/LoginPage",{
      UserStr,//Todo 账号
      PwdStr,//Todo 密码
    }).then(data => {
      this.props.history.push("/home")
      // if(data.data && ArrStr * 1 === VerifyStr * 1 && VerifyStr !== ""){
      //   this.setState(() => ({
      //     UserStr: "",//Todo 账号val
      //     PwdStr: "",//Todo 密码val
      //     VerifyStr: "",//Todo 验证码val
      //   }))
      //   this.props.history.push("/home")
      // }else{
      //   alert("输入有误")
      // }
    })
  } 

  UserStrChange = (e) => {//Todo 账号
    const val = e.target.value.trim()
    this.setState(() => ({
      UserStr: val
    }))
  }

  PwdStrChange = (e) => {//Todo 密码
    const val = e.target.value.trim()
    this.setState(() => ({
      PwdStr: val
    }))
  }

  VerifyStrChange = (e) => {//Todo 验证码
    const val = e.target.value.trim()
    this.setState(() => ({
      VerifyStr: val
    }))
  }

  VerifyStrClick = (e) => {//Todo 点击获取遮罩验证码
    const HTML = e.target.innerHTML
    this.setState(() => ({
      VerifyStr: HTML
    }))
  }

  VerificationCodeEvent = () => {//Todo 获取验证码
    const { AuthCodeArr} = this.props
    if(this.state.AuthCodeChack){
      const {...CountDown} = this.state
      const interval = setInterval(() => {//Todo 共60s 1s - 1
        this.setState(() => ({
          CountDown: CountDown.CountDown--,
          isChack: false,
          AuthCodeChack: false
        }))
        if(this.state.CountDown <= 0 ){//Todo 当倒计时成1s 时重置
          this.setState(() => ({
            CountDown: 10,
            isChack: true,
            AuthCodeChack: true
          }))
          clearInterval(interval)//Todo 当倒计时成为 0 的时候停止计时器
        }
      },1000);
      let Arr = "";
      for(var i = 0; i < 6; i++){//Todo 点击随机验证码
        Arr += this.state.AuthCode[Math.floor(Math.random() * this.state.AuthCode.length)]
      }
      AuthCodeArr(Arr,this.state.AuthCode[Math.floor(Math.random() * this.state.AuthCode.length)])//Todo 调用获取验证码函数
    }
  }

  ShadeEvent = (CountDown) => {//Todo 遮罩显示时间
    const { Time,ShowChackEventTrue,ShowChackEventFalse} = this.props
    CountDown * 1 === Time * 1 && ShowChackEventTrue()
    if(CountDown * 1 === 0 ){
      setTimeout(() => {
        ShowChackEventFalse()
      },3000)
      // clearInterval(intervalTwo)//Todo 当倒计时成为 0 的时候 3s 之后这招消失
    }
  }

  componentWillUnmount = () => {//Todo 请取消componentWillUnmount方法中的所有订阅和异步任务。
    
  }
}

const mapStateToProps = (state) => {
  return {
    ArrStr: state.ArrStr,//Todo 验证码
    Time: state.Time,//Todo 验证时间
    ShowChack: state.ShowChack,//Todo 控制验证码遮罩
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AuthCodeArr(Arr,Time){//Todo 储存验证码 / 时间
      const action = {
        type: "LoginPage",
        Arr,
        Time
      }
      dispatch(action)
    },
    ShowChackEventTrue(){//Todo 遮罩显示
      const action = {
        type: "ShowChackEventTrue"
      }
      dispatch(action)
    },
    ShowChackEventFalse(){//Todo 遮罩隐藏
      const action = {
        type: "ShowChackEventFalse"
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)