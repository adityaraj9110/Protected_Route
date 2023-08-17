import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = ({isAuth,children,adminRoute,isAdmin}) => {
    console.log(isAuth)
  if(!isAuth){
    return <Navigate to={'/auth'}/>
  }
  if(adminRoute && !isAdmin){
    return <Navigate to={'/'}/>
  }
  return children ? children : <Outlet/>
}

export default ProtectedRoute