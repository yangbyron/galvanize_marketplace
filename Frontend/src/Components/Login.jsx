import React, { useEffect } from 'react'

const Login = () => {

    const handleSubmit = (e) => {
      console.log(e.target)
      // useEffect(
      //   fetch('localhost:3001/user/api/:id')
      // )
    }

  return (
    <div>Login Page
      <form >
          <label>
            User Name:
            <input type="text" name="name" required />
          </label>
          
          <label>
            Password:
            <input type="password" required />
          </label>

          <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  )
}

export default Login