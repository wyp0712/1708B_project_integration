import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// component = {}
// render=() => {}
const RouterView = (props) => {
  const routesArr = props.routes.filter(val => val.component);
  const redirectArr = props.routes.filter(val => val.redirect);
  console.log(routesArr, 'routesArr')
  return (
    <Switch>
      {
        routesArr.map((item, index) => {
          return <Route key={index} path={item.path} render={ props => {
             return <item.component {...props} routes={item.children}/> 
          }} />
        })
      }
      {
        redirectArr.map((item, index) => {
          return <Redirect key={index} to={item.redirect} />
        }) 
      }
    </Switch>
  ) 
}

export default RouterView;