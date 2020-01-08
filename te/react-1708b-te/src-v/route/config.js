import LoginPage from "../views/LoginPage.js.js"
import Home from "../views/Home.js.js"

const RouteConfig = [
  {
    "path": "/loginpage",
    "components": LoginPage
  },
  {
    "path": "/home",
    "components": Home
  },
  {
    "path": "/",
    "redirect": "/loginpage"
  },
]

export default RouteConfig;