import React from "react";
import {Navigate} from "react-router-dom";

/**
 * 路由守卫
 */

function FrontendAuth(props) {
  const { children } = props

  const token = localStorage.getItem('token')

  if (token) {
    return (
      <>
        {children}
      </>
    )
  }
  return (
    <Navigate replace to={'/login'} />
  )
}
export default FrontendAuth