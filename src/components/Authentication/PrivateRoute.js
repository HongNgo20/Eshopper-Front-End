import React from "react"
import { Route,Link } from "react-router-dom"
import { useAuth } from "./Auth"

export default function PrivateRoute({ component: Component, ...rest }) {
  const  {currentUser}  = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Link to="/" />
      }}
    ></Route>
  )
}