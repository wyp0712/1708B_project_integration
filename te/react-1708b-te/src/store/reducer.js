const defaultState = {
  ArrStr: "",//Todo 验证码
  Time: "",//Todo 验证时间
  ShowChack: false,//Todo 控制验证码遮罩
}
export const reducerName = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if(action.type === "LoginPage"){//Todo 验证码 、验证时间
    newState.ArrStr = action.Arr
    newState.Time = action.Time
    return newState
  }
  if(action.type === "ShowChackEventTrue"){//Todo 控制验证码遮罩
    newState.ShowChack = true
    return newState
  }
  if(action.type === "ShowChackEventFalse"){//Todo 控制验证码遮罩
    newState.ShowChack = false
    return newState
  }
  return state
}