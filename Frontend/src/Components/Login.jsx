import React, { useEffect } from 'react'

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    // useEffect(
    //   fetch('localhost:3001/user/api/:id')
    // )
  }

  return (
    <div>Login Page
      <form onSubmit={handleSubmit}>
        <label>
          User Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Password:
          <input type="password" required />
        </label>

        <input type='submit' />
      </form>
    </div>
  )
}

export default Login