import React from "react"
import { Switch,Redirect,Route} from "react-router-dom"

const RouteIndex = (props) => {
  const components = props.routrs.filter(val => val.components)
  const redirect = props.routrs.filter(val => val.redirect)
  return (
    <Switch>
      {
        components.map((item,index) => {
          return (
            <Route key={index} path={item.path} render={props => {
              return <item.components {...props}/>
            }}/>
          )
        })
      }
      {
        redirect.map((item,index) => {
          return <Redirect key={index} to={item.redirect}/>
        })
      }
    </Switch>
  )
}

export default RouteIndex;