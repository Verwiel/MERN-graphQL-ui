// ternary login signup
import React, { useState } from 'react'


export default () => {
  const [loginState, setLogin] = useState({
    email: "",
    password: ""
  })

  const updateLoginField = (event: any) => {
    setLogin({
      ...loginState,
      [event.target.name]: event.target.value
    })
  }

  const printValues = (event: any ) => {
    event.preventDefault()
    console.log(loginState.email, loginState.password);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={printValues}>
        <input type="text"
          placeholder="Email" 
          name= "email"
          value={loginState.email}
          onChange={updateLoginField}/>

        <input type="text"
          placeholder="Password" 
          name= "password"
          value={loginState.password}
          onChange={updateLoginField}/>

        <input type="submit"
          name="login"
          value="Login"/>

      </form>
    </>
  )
}
