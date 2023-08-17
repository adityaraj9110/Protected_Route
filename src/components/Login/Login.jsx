import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch();
    const {login} = useSelector(state=>state.custom);
    console.log(login)
    const handleClick = ()=>{
        dispatch({type:"auth"})
    }

  return (
    <div>
        <button type="button" onClick={handleClick}>{login ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Login