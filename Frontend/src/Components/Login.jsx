import React from 'react'

const Login = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const userName = e.target["0"].value

    fetch(`localhost:3001/user/api/:${userName}`)
      .then((data) => {
        console.log(data)
      })
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

        <button>Submit</button>

      </form>
    </div>
  )
}

export default Login